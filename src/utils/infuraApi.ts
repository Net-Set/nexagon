import { ethers } from "ethers";
import { INFURA_API_URL, CONTRACT_ADDRESS, ABI } from "./constants";

async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000,
): Promise<T> {
  try {
    return await fn();
  } catch (error: unknown) {
    const errorCode = (error as { code?: string })?.code;
    if (
      (errorCode === "SERVER_ERROR" ||
        errorCode === "429" ||
        errorCode === "NETWORK_ERROR") &&
      maxRetries > 0
    ) {
      console.warn(
        `Retrying... attempts left: ${maxRetries}, error: ${errorCode}`,
      );
      await new Promise((r) => setTimeout(r, delay));
      return withRetry(fn, maxRetries - 1, delay * 2);
    }
    throw error instanceof Error
      ? error
      : new Error(`Unknown error: ${String(error)}`);
  }
}

// Types
export interface ContractData {
  contractBalance: string;
  deposit: string;
  totalUsersData: string;
  refrefward: string;
}

export interface UserSpecificData {
  userTotalDeposits: string;
  totalWithdrawn?: string;
  availableWithdrawBalance?: string;
  userDividends?: string;
  currentSeedIncome?: string;
  userReferralBonus?: string;
  totalReferralBusiness?: string;
  totalSeedBusiness?: string;
  userReferrals?: string;
}

// Function to fetch contract data (no wallet connection needed)
export const fetchContractData = async (): Promise<ContractData> => {
  return withRetry(async () => {
    const provider = new ethers.JsonRpcProvider(INFURA_API_URL);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    const contractBalance = await contract.getContractBalance();
    const deposit = await contract.totalInvested();
    const totalUsersData = await contract.totalUsers();
    const refrefward = await contract.totalRefBonus();

    return {
      contractBalance: ethers.formatEther(contractBalance),
      deposit: ethers.formatEther(deposit),
      totalUsersData: totalUsersData,
      refrefward: ethers.formatEther(refrefward),
    };
  });
};

// Function to fetch user-specific data (requires wallet connection)
export const fetchUserData = async (
  address: string,
): Promise<UserSpecificData> => {
  return withRetry(async () => {
    const provider = new ethers.JsonRpcProvider(INFURA_API_URL);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    const userTotalDeposits = await contract.getUserTotalDeposits(address);
    const totalWithdrawn = await contract.getUserTotalWithdrawn?.(address);
    const UserAvailable = (await contract.getUserAvailable?.(address)) || 0;
    const CurrentSeedIncome =
      (await contract.getcurrentseedincome?.(address)) || 0;
    const availableWithdrawBalance =
      BigInt(UserAvailable) + BigInt(CurrentSeedIncome);
    const userDividends = await contract.getUserDividends?.(address);
    const userReferralBonus = await contract.getUserReferralBonus?.(address);
    const totalReferralBusiness =
      await contract.getUserReferralTotalBonus?.(address);
    const totalSeedBusiness = await contract.getUserSeedIncome?.(address);
    const referrals = await contract.getUserDownlineCount?.(address);

    return {
      userTotalDeposits: ethers.formatEther(userTotalDeposits),
      totalWithdrawn: totalWithdrawn
        ? ethers.formatEther(totalWithdrawn)
        : undefined,
      availableWithdrawBalance: ethers.formatEther(
        availableWithdrawBalance.toString(),
      ),
      userDividends: ethers.formatEther(userDividends.toString()),
      currentSeedIncome: ethers.formatEther(CurrentSeedIncome.toString()),
      userReferralBonus: ethers.formatEther(userReferralBonus.toString()),
      totalReferralBusiness: ethers.formatEther(
        totalReferralBusiness.toString(),
      ),
      totalSeedBusiness: ethers.formatEther(totalSeedBusiness.toString()),
      userReferrals: referrals.toString(),
    };
  });
};
