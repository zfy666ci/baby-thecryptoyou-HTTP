const HavaABI=[
	{
		"inputs":	[
			{
				"internalType":	"contract GameNFTProxy",
				"name":	"_nftProxy",
				"type":	"address"
			},
			{
				"internalType":	"contract INFTWorkplace",
				"name":	"_workplace",
				"type":	"address"
			},
			{
				"internalType":	"contract IGameRewardToken",
				"name":	"_rewardToken",
				"type":	"address"
			}
		],
		"stateMutability":	"nonpayable",
		"type":	"constructor"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"AdminAdded",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"AdminRemoved",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"nftId",
				"type":	"uint256"
			}
		],
		"name":	"Deposit",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"to",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256[]",
				"name":	"nftIds",
				"type":	"uint256[]"
			}
		],
		"name":	"EmergencyMigrateStakeTokens",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"nftId",
				"type":	"uint256"
			}
		],
		"name":	"EmergencyWithdraw",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"EmergencyWithdrawReward",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"nftId",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"Harvest",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256[]",
				"name":	"nftIds",
				"type":	"uint256[]"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"HarvestAll",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"Paused",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"string",
				"name":	"role",
				"type":	"string"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"RoleAdded",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			},
			{
				"indexed":	true,
				"internalType":	"bytes32",
				"name":	"previousAdminRole",
				"type":	"bytes32"
			},
			{
				"indexed":	true,
				"internalType":	"bytes32",
				"name":	"newAdminRole",
				"type":	"bytes32"
			}
		],
		"name":	"RoleAdminChanged",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"sender",
				"type":	"address"
			}
		],
		"name":	"RoleGranted",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"string",
				"name":	"role",
				"type":	"string"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"RoleRemoved",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"sender",
				"type":	"address"
			}
		],
		"name":	"RoleRevoked",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"Unpaused",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"uint256",
				"name":	"nftId",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"Withdraw",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256[]",
				"name":	"nftIds",
				"type":	"uint256[]"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"WithdrawAll",
		"type":	"event"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			}
		],
		"name":	"WithdrawReward",
		"type":	"event"
	},
	{
		"inputs":	[
			
		],
		"name":	"ADMIN_ROLE",
		"outputs":	[
			{
				"internalType":	"bytes32",
				"name":	"",
				"type":	"bytes32"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"DEFAULT_ADMIN_ROLE",
		"outputs":	[
			{
				"internalType":	"bytes32",
				"name":	"",
				"type":	"bytes32"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"OWNER_ROLE",
		"outputs":	[
			{
				"internalType":	"bytes32",
				"name":	"",
				"type":	"bytes32"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"addAdmin",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"string",
				"name":	"role",
				"type":	"string"
			},
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"addRole",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"close",
		"outputs":	[
			
		],
		"stateMutability":	"payable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_nftId",
				"type":	"uint256"
			}
		],
		"name":	"deposit",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_to",
				"type":	"address"
			},
			{
				"internalType":	"uint256[]",
				"name":	"_tokenIds",
				"type":	"uint256[]"
			}
		],
		"name":	"emergencyMigrateStakeTokens",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_nftId",
				"type":	"uint256"
			}
		],
		"name":	"emergencyWithdraw",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"emergencyWithdrawReward",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			}
		],
		"name":	"getRoleAdmin",
		"outputs":	[
			{
				"internalType":	"bytes32",
				"name":	"",
				"type":	"bytes32"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			},
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"grantRole",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_nftId",
				"type":	"uint256"
			}
		],
		"name":	"harvest",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"harvestAll",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			},
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"hasRole",
		"outputs":	[
			{
				"internalType":	"bool",
				"name":	"",
				"type":	"bool"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"isAdmin",
		"outputs":	[
			{
				"internalType":	"bool",
				"name":	"",
				"type":	"bool"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"string",
				"name":	"role",
				"type":	"string"
			},
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"isRole",
		"outputs":	[
			{
				"internalType":	"bool",
				"name":	"",
				"type":	"bool"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"contract GameNFTProxy",
				"name":	"_nftProxy",
				"type":	"address"
			},
			{
				"internalType":	"contract INFTWorkplace",
				"name":	"_workplace",
				"type":	"address"
			},
			{
				"internalType":	"contract IGameRewardToken",
				"name":	"_rewardToken",
				"type":	"address"
			}
		],
		"name":	"migrate",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_to",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"_tokenId",
				"type":	"uint256"
			}
		],
		"name":	"migrateStakeToken",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"string",
				"name":	"role",
				"type":	"string"
			}
		],
		"name":	"newRole",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"nftProxy",
		"outputs":	[
			{
				"internalType":	"contract GameNFTProxy",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"owner",
		"outputs":	[
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bool",
				"name":	"_paused",
				"type":	"bool"
			}
		],
		"name":	"pause",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"paused",
		"outputs":	[
			{
				"internalType":	"bool",
				"name":	"",
				"type":	"bool"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_nftId",
				"type":	"uint256"
			}
		],
		"name":	"pendingRewardOfNFT",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_user",
				"type":	"address"
			}
		],
		"name":	"pendingRewardOfUser",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"removeAdmin",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"string",
				"name":	"role",
				"type":	"string"
			},
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"removeRole",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			},
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"renounceRole",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes32",
				"name":	"role",
				"type":	"bytes32"
			},
			{
				"internalType":	"address",
				"name":	"account",
				"type":	"address"
			}
		],
		"name":	"revokeRole",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"rewardBalance",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"rewardToken",
		"outputs":	[
			{
				"internalType":	"contract IGameRewardToken",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_user",
				"type":	"address"
			}
		],
		"name":	"stakeCountOfUser",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"name":	"stakeInfo",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"nftId",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"depositTime",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_user",
				"type":	"address"
			}
		],
		"name":	"stakeInfoOfUser",
		"outputs":	[
			{
				"internalType":	"uint256[]",
				"name":	"_nftIds",
				"type":	"uint256[]"
			},
			{
				"internalType":	"uint256",
				"name":	"_totalReward",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"startTime",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"bytes4",
				"name":	"interfaceId",
				"type":	"bytes4"
			}
		],
		"name":	"supportsInterface",
		"outputs":	[
			{
				"internalType":	"bool",
				"name":	"",
				"type":	"bool"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_startTime",
				"type":	"uint256"
			}
		],
		"name":	"updateStartTime",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_nftId",
				"type":	"uint256"
			}
		],
		"name":	"withdraw",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"withdrawAll",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_amount",
				"type":	"uint256"
			}
		],
		"name":	"withdrawReward",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"workplace",
		"outputs":	[
			{
				"internalType":	"contract INFTWorkplace",
				"name":	"",
				"type":	"address"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	}
]

module.exports = HavaABI;