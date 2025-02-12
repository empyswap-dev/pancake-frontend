export const idoABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  { inputs: [], name: 'AddressesLengthNotCorrect', type: 'error' },
  { inputs: [], name: 'AlreadyHarvested', type: 'error' },
  { inputs: [], name: 'AlreadyInitialized', type: 'error' },
  { inputs: [], name: 'AmountMustBeZero', type: 'error' },
  { inputs: [], name: 'AmountMustExceedMinimum', type: 'error' },
  { inputs: [], name: 'AmountMustExceedZero', type: 'error' },
  { inputs: [], name: 'CanNotBeLPToken', type: 'error' },
  { inputs: [], name: 'CanNotBeOfferingToken', type: 'error' },
  { inputs: [], name: 'DidNotParticipate', type: 'error' },
  { inputs: [], name: 'EndTimeTooFar', type: 'error' },
  { inputs: [], name: 'FlatTaxRateMustBe0WhenHasTaxIsFalse', type: 'error' },
  { inputs: [], name: 'FlatTaxRateMustBeLessThan1e12', type: 'error' },
  { inputs: [], name: 'IDOHasStarted', type: 'error' },
  { inputs: [], name: 'MaxPoolIdNotValid', type: 'error' },
  { inputs: [], name: 'NewAmountAboveUserCap', type: 'error' },
  { inputs: [], name: 'NotEnoughLPTokens', type: 'error' },
  { inputs: [], name: 'NotEnoughOfferingTokens', type: 'error' },
  { inputs: [], name: 'PoolIdNotValid', type: 'error' },
  { inputs: [], name: 'PoolNotSet', type: 'error' },
  { inputs: [], name: 'SignatureVerifyFailed', type: 'error' },
  { inputs: [], name: 'SignerAddressZero', type: 'error' },
  { inputs: [], name: 'StartAndEndTimestampsLengthNotCorrect', type: 'error' },
  { inputs: [], name: 'StartTimeMustInferiorToEndTime', type: 'error' },
  { inputs: [], name: 'TokensNotDepositedProperly', type: 'error' },
  { inputs: [], name: 'TooEarly', type: 'error' },
  { inputs: [], name: 'TooLate', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'tokenAddress', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amountTokens', type: 'uint256' },
    ],
    name: 'AdminTokenRecovery',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'amountLP0', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'amountLP1', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'amountOfferingToken', type: 'uint256' },
    ],
    name: 'AdminWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: true, internalType: 'uint8', name: 'pid', type: 'uint8' },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'offeringAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'excessAmount', type: 'uint256' },
      { indexed: true, internalType: 'uint8', name: 'pid', type: 'uint8' },
    ],
    name: 'Harvest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'startTimestamp', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'endTimestamp', type: 'uint256' },
    ],
    name: 'NewStartAndEndTimestamps',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'offeringAmountPool', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'raisingAmountPool', type: 'uint256' },
      { indexed: true, internalType: 'uint8', name: 'pid', type: 'uint8' },
    ],
    name: 'PoolParametersSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'minAmount', type: 'uint256' },
      { indexed: true, internalType: 'uint8', name: 'pid', type: 'uint8' },
    ],
    name: 'UpdatedMinDepositAmount',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'signerAddr', type: 'address' }],
    name: 'UpdatedSignerAddress',
    type: 'event',
  },
  {
    inputs: [],
    name: 'MAX_BUFFER_SECONDS',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_POOL_ID',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'MIN_DEPOSIT_AMOUNTS',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: '_poolInformation',
    outputs: [
      { internalType: 'uint256', name: 'raisingAmountPool', type: 'uint256' },
      { internalType: 'uint256', name: 'offeringAmountPool', type: 'uint256' },
      { internalType: 'uint256', name: 'capPerUserInLP', type: 'uint256' },
      { internalType: 'bool', name: 'hasTax', type: 'bool' },
      { internalType: 'uint256', name: 'flatTaxRate', type: 'uint256' },
      { internalType: 'uint256', name: 'totalAmountPool', type: 'uint256' },
      { internalType: 'uint256', name: 'sumTaxesOverflow', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'addresses',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'uint8', name: '_pid', type: 'uint8' },
      { internalType: 'uint256', name: '_expiredAt', type: 'uint256' },
      { internalType: 'bytes', name: '_signature', type: 'bytes' },
    ],
    name: 'depositPool',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endTimestamp',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_lpAmount0', type: 'uint256' },
      { internalType: 'uint256', name: '_lpAmount1', type: 'uint256' },
      { internalType: 'uint256', name: '_offerAmount', type: 'uint256' },
    ],
    name: 'finalWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint8', name: '_pid', type: 'uint8' }],
    name: 'harvestPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: '_addresses', type: 'address[]' },
      { internalType: 'uint256[]', name: '_startAndEndTimestamps', type: 'uint256[]' },
      { internalType: 'uint256', name: '_maxBufferSeconds', type: 'uint256' },
      { internalType: 'uint8', name: '_maxPoolId', type: 'uint8' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_tokenAddress', type: 'address' },
      { internalType: 'uint256', name: '_tokenAmount', type: 'uint256' },
    ],
    name: 'recoverWrongTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'uint256', name: '_offeringAmountPool', type: 'uint256' },
      { internalType: 'uint256', name: '_raisingAmountPool', type: 'uint256' },
      { internalType: 'uint256', name: '_limitPerUserInLP', type: 'uint256' },
      { internalType: 'bool', name: '_hasTax', type: 'bool' },
      { internalType: 'uint256', name: '_flatTaxRate', type: 'uint256' },
      { internalType: 'uint8', name: '_pid', type: 'uint8' },
    ],
    name: 'setPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'signerAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startTimestamp',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalTokensOffered',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_newAmount', type: 'uint256' },
      { internalType: 'uint8', name: '_pid', type: 'uint8' },
    ],
    name: 'updateMinDepositAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_signerAddr', type: 'address' }],
    name: 'updateSignerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256[]', name: '_startAndEndTimestamps', type: 'uint256[]' }],
    name: 'updateStartAndEndTimestamps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint8', name: '_pid', type: 'uint8' }],
    name: 'viewPoolTaxRateOverflow',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_user', type: 'address' },
      { internalType: 'uint8[]', name: '_pids', type: 'uint8[]' },
    ],
    name: 'viewUserAllocationPools',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_user', type: 'address' },
      { internalType: 'uint8[]', name: '_pids', type: 'uint8[]' },
    ],
    name: 'viewUserInfo',
    outputs: [
      { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      { internalType: 'bool[]', name: '', type: 'bool[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_user', type: 'address' },
      { internalType: 'uint8[]', name: '_pids', type: 'uint8[]' },
    ],
    name: 'viewUserOfferingAndRefundingAmountsForPools',
    outputs: [{ internalType: 'uint256[3][]', name: '', type: 'uint256[3][]' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const
