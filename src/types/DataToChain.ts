/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface DataToChainInterface extends utils.Interface {
  contractName: "DataToChain";
  functions: {
    "getParentAddress(address)": FunctionFragment;
    "getUpChainAmount(address)": FunctionFragment;
    "isUp(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "store(uint256,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
    "userIdMapAddress(uint256)": FunctionFragment;
    "userInfos(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getParentAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpChainAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isUp",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "userIdMapAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userInfos", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "getParentAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpChainAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userIdMapAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfos", data: BytesLike): Result;

  events: {};
}

export interface DataToChain extends BaseContract {
  contractName: "DataToChain";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DataToChainInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getParentAddress(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUpChainAmount(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isUp(
      userAddress: string,
      userId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    store(
      userId: BigNumberish,
      parentId: BigNumberish,
      lockeBalance: BigNumberish,
      assetsBalance: BigNumberish,
      changeBalance: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userIdMapAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    userInfos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        userId: BigNumber;
        parentId: BigNumber;
        lockeBalance: BigNumber;
        assetsBalance: BigNumber;
        changeBalance: BigNumber;
      }
    >;
  };

  getParentAddress(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getUpChainAmount(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isUp(
    userAddress: string,
    userId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, boolean]>;

  owner(overrides?: CallOverrides): Promise<string>;

  store(
    userId: BigNumberish,
    parentId: BigNumberish,
    lockeBalance: BigNumberish,
    assetsBalance: BigNumberish,
    changeBalance: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userIdMapAddress(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  userInfos(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      userId: BigNumber;
      parentId: BigNumber;
      lockeBalance: BigNumber;
      assetsBalance: BigNumber;
      changeBalance: BigNumber;
    }
  >;

  callStatic: {
    getParentAddress(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getUpChainAmount(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUp(
      userAddress: string,
      userId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean]>;

    owner(overrides?: CallOverrides): Promise<string>;

    store(
      userId: BigNumberish,
      parentId: BigNumberish,
      lockeBalance: BigNumberish,
      assetsBalance: BigNumberish,
      changeBalance: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    userIdMapAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    userInfos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        userId: BigNumber;
        parentId: BigNumber;
        lockeBalance: BigNumber;
        assetsBalance: BigNumber;
        changeBalance: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getParentAddress(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpChainAmount(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUp(
      userAddress: string,
      userId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    store(
      userId: BigNumberish,
      parentId: BigNumberish,
      lockeBalance: BigNumberish,
      assetsBalance: BigNumberish,
      changeBalance: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userIdMapAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfos(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getParentAddress(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUpChainAmount(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUp(
      userAddress: string,
      userId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    store(
      userId: BigNumberish,
      parentId: BigNumberish,
      lockeBalance: BigNumberish,
      assetsBalance: BigNumberish,
      changeBalance: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userIdMapAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userInfos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
