import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts"
import {
  SafeMoon,
  Approval,
  MinTokensBeforeSwapUpdated,
  OwnershipTransferred,
  SwapAndLiquify,
  SwapAndLiquifyEnabledUpdated,
  Transfer
} from "../generated/SafeMoon/SafeMoon"
import { Contract } from "../generated/schema"

export function handleApproval(event: Approval): void {}

export function handleMinTokensBeforeSwapUpdated(
  event: MinTokensBeforeSwapUpdated
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSwapAndLiquify(event: SwapAndLiquify): void {}

export function handleSwapAndLiquifyEnabledUpdated(
  event: SwapAndLiquifyEnabledUpdated
): void {}

export function handleTransfer(event: Transfer): void {
  let safeMoon = SafeMoon.bind(event.address)

  let id = event.transaction.hash.toHexString()
  let contract = new Contract(id)

  contract.name = safeMoon._name
  contract.symbol = safeMoon.symbol()
  contract.totalSupply = safeMoon.totalSupply()
  
  contract.save()
}
