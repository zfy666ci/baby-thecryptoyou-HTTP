const MarkABI=[
	{
		"inputs":	[
			{
				"internalType":	"contract IBEP20",
				"name":	"_syrup",
				"type":	"address"
			},
			{
				"internalType":	"contract IBEP20",
				"name":	"_rewardToken",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"_rewardPerBlock",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"_startBlock",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"_bonusEndBlock",
				"type":	"uint256"
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
				"internalType":	"uint256",
				"name":	"amount",
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
				"name":	"previousOwner",
				"type":	"address"
			},
			{
				"indexed":	true,
				"internalType":	"address",
				"name":	"newOwner",
				"type":	"address"
			}
		],
		"name":	"OwnershipTransferred",
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
		"name":	"Withdraw",
		"type":	"event"
	},
	{
		"inputs":	[
			
		],
		"name":	"bonusEndBlock",
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
				"name":	"_amount",
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
				"internalType":	"uint256",
				"name":	"_amount",
				"type":	"uint256"
			}
		],
		"name":	"emergencyRewardWithdraw",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"emergencyWithdraw",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_from",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"_to",
				"type":	"uint256"
			}
		],
		"name":	"getMultiplier",
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
		"name":	"massUpdatePools",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
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
				"internalType":	"address",
				"name":	"_user",
				"type":	"address"
			}
		],
		"name":	"pendingReward",
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
		"name":	"poolInfo",
		"outputs":	[
			{
				"internalType":	"contract IBEP20",
				"name":	"lpToken",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"allocPoint",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"lastRewardBlock",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"accCakePerShare",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"renounceOwnership",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"rewardPerBlock",
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
				"internalType":	"contract IBEP20",
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
		"name":	"startBlock",
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
		"name":	"stopReward",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			
		],
		"name":	"syrup",
		"outputs":	[
			{
				"internalType":	"contract IBEP20",
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
				"name":	"newOwner",
				"type":	"address"
			}
		],
		"name":	"transferOwnership",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"_pid",
				"type":	"uint256"
			}
		],
		"name":	"updatePool",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			}
		],
		"name":	"userInfo",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"amount",
				"type":	"uint256"
			},
			{
				"internalType":	"uint256",
				"name":	"rewardDebt",
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
				"name":	"_amount",
				"type":	"uint256"
			}
		],
		"name":	"withdraw",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	}
]

module.exports = MarkABI;