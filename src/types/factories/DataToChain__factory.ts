/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { DataToChain, DataToChainInterface } from "../DataToChain";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getParentAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUpChainAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "isUp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "parentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockeBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetsBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "changeBalance",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class DataToChain__factory {
  static readonly abi = _abi;
  static createInterface(): DataToChainInterface {
    return new utils.Interface(_abi) as DataToChainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataToChain {
    return new Contract(address, _abi, signerOrProvider) as DataToChain;
  }
}
