/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface C2CAdvertiseStorageUpgradeableInterface
  extends utils.Interface {
  contractName: "C2CAdvertiseStorageUpgradeable";
  functions: {
    "advertiseAt(uint256)": FunctionFragment;
    "advertiseIds()": FunctionFragment;
    "advertiseLength()": FunctionFragment;
    "c2CAdvertiseMap(uint256)": FunctionFragment;
    "idOfOrderIds(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "advertiseAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "advertiseIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "advertiseLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "c2CAdvertiseMap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "idOfOrderIds",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "advertiseAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "advertiseIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "advertiseLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c2CAdvertiseMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "idOfOrderIds",
    data: BytesLike
  ): Result;

  events: {
    "AddC2CAdvertised(uint256,address,string,uint256,uint256,uint256,uint256,address,address)": EventFragment;
    "RemoveC2CAdvertised(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddC2CAdvertised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveC2CAdvertised"): EventFragment;
}

export type AddC2CAdvertisedEvent = TypedEvent<
  [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
  ],
  {
    id: BigNumber;
    owner: string;
    nickName: string;
    total: BigNumber;
    price: BigNumber;
    min: BigNumber;
    max: BigNumber;
    sellToken: string;
    receiveToken: string;
  }
>;

export type AddC2CAdvertisedEventFilter =
  TypedEventFilter<AddC2CAdvertisedEvent>;

export type RemoveC2CAdvertisedEvent = TypedEvent<
  [BigNumber],
  { id: BigNumber }
>;

export type RemoveC2CAdvertisedEventFilter =
  TypedEventFilter<RemoveC2CAdvertisedEvent>;

export interface C2CAdvertiseStorageUpgradeable extends BaseContract {
  contractName: "C2CAdvertiseStorageUpgradeable";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: C2CAdvertiseStorageUpgradeableInterface;

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
    advertiseAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    advertiseIds(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    advertiseLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    c2CAdvertiseMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
      ] & {
        id: BigNumber;
        owner: string;
        nickName: string;
        total: BigNumber;
        sold: BigNumber;
        price: BigNumber;
        min: BigNumber;
        max: BigNumber;
        sellToken: string;
        receiveToken: string;
      }
    >;

    idOfOrderIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  advertiseAt(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  advertiseIds(overrides?: CallOverrides): Promise<BigNumber[]>;

  advertiseLength(overrides?: CallOverrides): Promise<BigNumber>;

  c2CAdvertiseMap(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string
    ] & {
      id: BigNumber;
      owner: string;
      nickName: string;
      total: BigNumber;
      sold: BigNumber;
      price: BigNumber;
      min: BigNumber;
      max: BigNumber;
      sellToken: string;
      receiveToken: string;
    }
  >;

  idOfOrderIds(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    advertiseAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    advertiseIds(overrides?: CallOverrides): Promise<BigNumber[]>;

    advertiseLength(overrides?: CallOverrides): Promise<BigNumber>;

    c2CAdvertiseMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
      ] & {
        id: BigNumber;
        owner: string;
        nickName: string;
        total: BigNumber;
        sold: BigNumber;
        price: BigNumber;
        min: BigNumber;
        max: BigNumber;
        sellToken: string;
        receiveToken: string;
      }
    >;

    idOfOrderIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AddC2CAdvertised(uint256,address,string,uint256,uint256,uint256,uint256,address,address)"(
      id?: BigNumberish | null,
      owner?: string | null,
      nickName?: null,
      total?: null,
      price?: null,
      min?: null,
      max?: null,
      sellToken?: string | null,
      receiveToken?: null
    ): AddC2CAdvertisedEventFilter;
    AddC2CAdvertised(
      id?: BigNumberish | null,
      owner?: string | null,
      nickName?: null,
      total?: null,
      price?: null,
      min?: null,
      max?: null,
      sellToken?: string | null,
      receiveToken?: null
    ): AddC2CAdvertisedEventFilter;

    "RemoveC2CAdvertised(uint256)"(
      id?: BigNumberish | null
    ): RemoveC2CAdvertisedEventFilter;
    RemoveC2CAdvertised(
      id?: BigNumberish | null
    ): RemoveC2CAdvertisedEventFilter;
  };

  estimateGas: {
    advertiseAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    advertiseIds(overrides?: CallOverrides): Promise<BigNumber>;

    advertiseLength(overrides?: CallOverrides): Promise<BigNumber>;

    c2CAdvertiseMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    idOfOrderIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    advertiseAt(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    advertiseIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    advertiseLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    c2CAdvertiseMap(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    idOfOrderIds(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
