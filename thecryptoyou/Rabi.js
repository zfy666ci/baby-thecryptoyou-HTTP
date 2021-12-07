const Rabi=[
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_coinAddr",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"_playerInfoAddr",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"linggong",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"datie",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"bulie",
				"type":	"address"
			},
			{
				"internalType":	"address",
				"name":	"tushu",
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
				"name":	"_addr",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"bool",
				"name":	"_access",
				"type":	"bool"
			}
		],
		"name":	"AccessAllowed",
		"type":	"event"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"workType",
				"type":	"address"
			}
		],
		"name":	"addWork",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"workType",
				"type":	"address"
			}
		],
		"name":	"delWork",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"getAward",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"workType",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"startTime",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"endTime",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"income",
				"type":	"uint256"
			}
		],
		"name":	"GetAward",
		"type":	"event"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_addr",
				"type":	"address"
			}
		],
		"name":	"grantAccess",
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
			},
			{
				"internalType":	"address",
				"name":	"",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			},
			{
				"internalType":	"bytes",
				"name":	"",
				"type":	"bytes"
			}
		],
		"name":	"onERC721Received",
		"outputs":	[
			{
				"internalType":	"bytes4",
				"name":	"",
				"type":	"bytes4"
			}
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
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
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"quitWork",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"workType",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"time",
				"type":	"uint256"
			}
		],
		"name":	"QuitWork",
		"type":	"event"
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
			{
				"internalType":	"address",
				"name":	"_addr",
				"type":	"address"
			}
		],
		"name":	"revokeAccess",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_coinAddr",
				"type":	"address"
			}
		],
		"name":	"setCoinAddr",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"_playerInfoAddr",
				"type":	"address"
			}
		],
		"name":	"setPlayerInfoAddr",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
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
				"internalType":	"address",
				"name":	"workType",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"work",
		"outputs":	[
			
		],
		"stateMutability":	"nonpayable",
		"type":	"function"
	},
	{
		"anonymous":	false,
		"inputs":	[
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"workType",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"address",
				"name":	"user",
				"type":	"address"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			},
			{
				"indexed":	false,
				"internalType":	"uint256",
				"name":	"startTime",
				"type":	"uint256"
			}
		],
		"name":	"Work",
		"type":	"event"
	},
	{
		"inputs":	[
			{
				"internalType":	"address",
				"name":	"owner",
				"type":	"address"
			}
		],
		"name":	"balanceOf",
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
		"name":	"coinAddr",
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
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"getAwardInfo",
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
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"getPlayerWork",
		"outputs":	[
			{
				"components":	[
					{
						"internalType":	"address",
						"name":	"workType",
						"type":	"address"
					},
					{
						"internalType":	"address",
						"name":	"careerAddr",
						"type":	"address"
					},
					{
						"internalType":	"uint256",
						"name":	"startTime",
						"type":	"uint256"
					},
					{
						"internalType":	"uint256",
						"name":	"endTime",
						"type":	"uint256"
					},
					{
						"internalType":	"address",
						"name":	"owner",
						"type":	"address"
					},
					{
						"internalType":	"uint256[]",
						"name":	"blocks",
						"type":	"uint256[]"
					}
				],
				"internalType":	"struct Mining.PlayerWork",
				"name":	"",
				"type":	"tuple"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	},
	{
		"inputs":	[
			{
				"internalType":	"uint256",
				"name":	"index",
				"type":	"uint256"
			}
		],
		"name":	"getWorkType",
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
			
		],
		"name":	"getWorkTypeLen",
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
				"name":	"_addr",
				"type":	"address"
			}
		],
		"name":	"hasAccess",
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
				"internalType":	"uint256",
				"name":	"tokenId",
				"type":	"uint256"
			}
		],
		"name":	"ownerOf",
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
			
		],
		"name":	"playerInfoAddr",
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
				"name":	"owner",
				"type":	"address"
			},
			{
				"internalType":	"uint256",
				"name":	"index",
				"type":	"uint256"
			}
		],
		"name":	"tokenOfOwnerByIndex",
		"outputs":	[
			{
				"internalType":	"uint256",
				"name":	"",
				"type":	"uint256"
			}
		],
		"stateMutability":	"view",
		"type":	"function"
	}
]
module.exports = Rabi;