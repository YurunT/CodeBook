//注意：在前端有输入要向后端提交的时候，一定确保用户的输入不为空，否则可能会出现bug。

var Web3 = require("web3");  //如果这是放在前端js中的代码，就不用写这一句。但是注意，一定把web3.js这个js文件放在同一目录下
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


//这个地址来自于user合约部署后的得到的地址，每次重新部署的时候，地址是不一样的。
var useraddress = "0x94af18035b91eb0c7e66ef2a59c425ce191d4c39";
var userContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"info_address","type":"address"},{"name":"password","type":"string"}],"name":"set","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"password","type":"string"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"password","type":"string"}],"name":"del","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"password","type":"string"},{"name":"new_password","type":"string"}],"name":"changePassword","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);



//--------------函数使用例子--------------------
// //console.log(getAddress("myy1"));
//var test1 = register("myy","myy","myy");
// console.log(test1);
//console.log(login("myy2","myy2"));
//console.log(getAddress("myy1"));
//addAccount("myy15","myy53","myy53","myy53");
//var test1=addAccount("myy2","1111111","66666","qq");
//console.log(test1);
addAccount("codebook","123456@163.com","123789456","邮箱");
//changePassword("myy1","myy1","newmyy1");
//delAccount("myy2",2,"myy2");
//queryAccountList("tyr","123456");
//console.log(login("myy2","myy2"));
//----------------------------------------------




//需要输入两个密码，一个是用户密码，一个是删除密码。删除密码用户删除账户下的账号。
//暂时，这个函数还有bug。当用户重名的时候，它不会返回false，但是也不会重写用户的数据，相当于什么都没有发生
function register(userName, password, status_password){
	//第二类合约
	var detailsContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"deductCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"string"},{"name":"account_type","type":"string"}],"name":"isExisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newaccount","type":"string"},{"name":"newpassword","type":"string"},{"name":"newaccount_type","type":"string"}],"name":"addAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"}],"name":"getSimpleInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_password","type":"string"}],"name":"getAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_status_password","type":"string"}],"name":"delAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"new_password","type":"string"},{"name":"new_status_password","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

	
	var user_detail = detailsContract.new(password, status_password,
	   {
	     from: web3.eth.accounts[0], 
	     data: '0x60806040523480156200001157600080fd5b506040516200121e3803806200121e8339810180604052810190808051820192919060200180518201929190505050605060018190555081600290805190602001906200006092919062000089565b5080600390805190602001906200007992919062000089565b5060008081905550505062000138565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000cc57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fc578251825591602001919060010190620000df565b5b5090506200010c919062000110565b5090565b6200013591905b808211156200013157600081600090555060010162000117565b5090565b90565b6110d680620001486000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063492e13df146100935780636cefce6e146100aa57806388cbad77146100c1578063a87d942c14610188578063bb346fe3146101b3578063e0e690aa146102c0578063f5ed441b146103d2578063faf238e414610596575b600080fd5b34801561009f57600080fd5b506100a8610621565b005b3480156100b657600080fd5b506100bf610635565b005b3480156100cd57600080fd5b5061016e600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610648565b604051808215151515815260200191505060405180910390f35b34801561019457600080fd5b5061019d610823565b6040518082815260200191505060405180910390f35b3480156101bf57600080fd5b506102a6600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061082c565b604051808215151515815260200191505060405180910390f35b3480156102cc57600080fd5b506102eb600480360381019080803590602001909291905050506108b9565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561032f578082015181840152602081019050610314565b50505050905090810190601f16801561035c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561039557808201518184015260208101905061037a565b50505050905090810190601f1680156103c25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b3480156103de57600080fd5b5061044360048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610a29565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b8381101561048b578082015181840152602081019050610470565b50505050905090810190601f1680156104b85780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b838110156104f15780820151818401526020810190506104d6565b50505050905090810190601f16801561051e5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b8381101561055757808201518184015260208101905061053c565b50505050905090810190601f1680156105845780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b3480156105a257600080fd5b5061060760048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610d63565b604051808215151515815260200191505060405180910390f35b600080815480929190600190039190505550565b6000808154809291906001019190505550565b6000806000809150600190505b6000548160ff161315156108185761072e610720600460008460ff1681526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107165780601f106106eb57610100808354040283529160200191610716565b820191906000526020600020905b8154815290600101906020018083116106f957829003601f168201915b5050505050610e78565b61072987610e78565b610ea6565b801561080157506108006107f2600460008460ff1681526020019081526020016000206002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107e85780601f106107bd576101008083540402835291602001916107e8565b820191906000526020600020905b8154815290600101906020018083116107cb57829003601f168201915b5050505050610e78565b6107fb86610e78565b610ea6565b5b1561080b57600191505b8080600101915050610655565b819250505092915050565b60008054905090565b60008360046000805481526020019081526020016000206000019080519060200190610859929190610fa3565b508260046000805481526020019081526020016000206001019080519060200190610885929190610fa3565b5081600460008054815260200190815260200160002060020190805190602001906108b1929190610fa3565b509392505050565b6060806004600084815260200190815260200160002060000160046000858152602001908152602001600020600201818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561097d5780601f106109525761010080835404028352916020019161097d565b820191906000526020600020905b81548152906001019060200180831161096057829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a195780601f106109ee57610100808354040283529160200191610a19565b820191906000526020600020905b8154815290600101906020018083116109fc57829003601f168201915b5050505050905091509150915091565b6060806060600085138015610a4057506000548513155b8015610afc5750610afb610aed60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae35780601f10610ab857610100808354040283529160200191610ae3565b820191906000526020600020905b815481529060010190602001808311610ac657829003601f168201915b5050505050610e78565b610af686610e78565b610ea6565b5b15610d2257600460008681526020019081526020016000206000016004600087815260200190815260200160002060010160046000888152602001908152602001600020600201828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bd85780601f10610bad57610100808354040283529160200191610bd8565b820191906000526020600020905b815481529060010190602001808311610bbb57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c745780601f10610c4957610100808354040283529160200191610c74565b820191906000526020600020905b815481529060010190602001808311610c5757829003601f168201915b50505050509150808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d105780601f10610ce557610100808354040283529160200191610d10565b820191906000526020600020905b815481529060010190602001808311610cf357829003601f168201915b50505050509050925092509250610d5c565b6020604051908101604052806000815250602060405190810160405280600081525060206040519081016040528060008152509250925092505b9250925092565b6000610e19610d7183610e78565b610e1460038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e0a5780601f10610ddf57610100808354040283529160200191610e0a565b820191906000526020600020905b815481529060010190602001808311610ded57829003601f168201915b5050505050610e78565b610ea6565b15610e6d576004600084815260200190815260200160002060008082016000610e429190611023565b600182016000610e529190611023565b600282016000610e629190611023565b505060019050610e72565b600090505b92915050565b610e8061106b565b600060208301905060408051908101604052808451815260200182815250915050919050565b600080610eb38484610ebc565b14905092915050565b60008060008060008060008060008a6000015197508a600001518a600001511015610ee957896000015197505b8a60200151965089602001519550600094505b87851015610f875786519350855192508284141515610f70577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91506020881015610f5457600185896020030160080260020a031991505b818316828516039050600081141515610f6f57809850610f95565b5b602087019650602086019550602085019450610efc565b89600001518b600001510398505b505050505050505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610fe457805160ff1916838001178555611012565b82800160010185558215611012579182015b82811115611011578251825591602001919060010190610ff6565b5b50905061101f9190611085565b5090565b50805460018160011615610100020316600290046000825580601f106110495750611068565b601f0160209004906000526020600020908101906110679190611085565b5b50565b604080519081016040528060008152602001600081525090565b6110a791905b808211156110a357600081600090555060010161108b565b5090565b905600a165627a7a7230582042172c835f67e5b44748de176914cf405f4f98cd2bfdb69ecc84054345b4f1e60029', 
	     gas: '4700000'
	   }, function (e, contract){
	    if (typeof contract.address !== 'undefined') {
	         //console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);

	         //第一类合约
			var user = userContract.at(useraddress);

			//添加用户--注册
			//注册的时候，用户要输入两个密码，其中一个是登陆密码，另一个是交易密码。每次删除用户账号的时候要提供交易密码。
			user.set.sendTransaction(userName,contract.address,password,
				{from : web3.eth.accounts[0],},
				function(error, transactionHash){
					if(!error){

						//在此处添加注册完成后要执行的代码
						console.log("交易hash：" + transactionHash);
						console.log(login(userName,password));
						console.log("注册完成");
						//addAccount(userName,"","",""); //第一个账号总是添加不成功，原因没找出来
						return true;
					}else{
						return false;
					}
				}
			)
	    }else{
	    	return false;
	    }
	 })
	 console.log("sign up执行完毕");
}

//注销用户的函数，执行完之后，用户的合约地址和密码会被删除
function del(userName,password){
	var user = userContract.at(useraddress);
	user.del.sendTransaction(userName,password,
				{from : web3.eth.accounts[0],},
				function(error, transactionHash){
					if(!error){

						//在此处添加注销完成后要执行的代码
						console.log("交易hash：" + transactionHash);
						console.log(login(userName,password));
						console.log("删除完成");
						console.log(getAddress(userName));
						return true;
					}else{
						return false;
					}
				}
			);
}	



//登陆验证函数。账号密码都正确，返回true，否则返回false。
function login(userName, password){
	var user = userContract.at(useraddress);
	return user.login.call(userName, password);
}

//修改用户登陆密码
function changePassword(userName,oldPassword, newPassword) {
	var user = userContract.at(useraddress);
	user.changePassword.sendTransaction(userName,oldPassword,newPassword,
				{from : web3.eth.accounts[0],},
				function(error, transactionHash){
					if(!error){

						//在此处添加注销完成后要执行的代码
						console.log("交易hash：" + transactionHash);
						console.log("登陆密码修改完成");
					}
				}
			);
}

//如果用户不存在，则返回的地址是  0x0000000000000000000000000000000000000000
function getAddress(userName){
	var user = userContract.at(useraddress);
	return user.getAddress.call(userName);
}





//添加新的账号之前，请先判断要添加的账号是否已经存在，这个函数只管添加，不管判断
function addAccount(userName,account,password,account_type){
	var address = getAddress(userName);
 	var detailsContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"deductCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"string"},{"name":"account_type","type":"string"}],"name":"isExisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newaccount","type":"string"},{"name":"newpassword","type":"string"},{"name":"newaccount_type","type":"string"}],"name":"addAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"}],"name":"getSimpleInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_password","type":"string"}],"name":"getAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_status_password","type":"string"}],"name":"delAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"new_password","type":"string"},{"name":"new_status_password","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
 	var user_detail = detailsContract.at(address);

 	user_detail.addAccount.sendTransaction(account,password,account_type,
				{from : web3.eth.accounts[0],},
				function(error, transactionHash){
					if(!error){

						console.log("账号添加完成");
						user_detail.addCount.sendTransaction(
							{from : web3.eth.accounts[0],},
							function(error, transactionHash){
								if(!error){
									console.log("Count自增");

									//调试代码
									//queryAccountList("myy9","myy9");

								}
							}
						);
						console.log("trueeeeee")
						return true;

					}else{
						console.log("falseeeee")
						return false;
					}
				}
			);
}


//删除账户下的某一个账号，需要提供删除密码（删除密码是注册的时候输入的第二个密码参数）
function delAccount(userName,index,status_password){
	var address = getAddress(userName);
	var detailsContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"deductCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"string"},{"name":"account_type","type":"string"}],"name":"isExisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newaccount","type":"string"},{"name":"newpassword","type":"string"},{"name":"newaccount_type","type":"string"}],"name":"addAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"}],"name":"getSimpleInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_password","type":"string"}],"name":"getAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_status_password","type":"string"}],"name":"delAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"new_password","type":"string"},{"name":"new_status_password","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
 	var user_detail = detailsContract.at(address);
 		user_detail.delAccount.sendTransaction(index,status_password,
				{from : web3.eth.accounts[0],},
				function(error, transactionHash){
					if(!error){

						//在此处添加删除完成后要执行的代码
						console.log("交易hash：" + transactionHash);
						console.log("账号删除完成");
					}
				}
			);
}



//返回用户已有的账号列表
//返回值是一个对象数组
//对象数组中的下标从1开始，在执行删除等操作时，传入的参数index就是这个下标。
//由于有账号的删除，所以查询出来的有些下标对应的对象为空，建议判断为空时，不在前端进行显示
 function queryAccountList(userName,password){
 	var address = getAddress(userName);
 	var list = new Array();
 	var detailsContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"deductCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"string"},{"name":"account_type","type":"string"}],"name":"isExisted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newaccount","type":"string"},{"name":"newpassword","type":"string"},{"name":"newaccount_type","type":"string"}],"name":"addAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"}],"name":"getSimpleInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_password","type":"string"}],"name":"getAccount","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"int256"},{"name":"temp_status_password","type":"string"}],"name":"delAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"new_password","type":"string"},{"name":"new_status_password","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
 	var user_detail = detailsContract.at(address);
 	var count = parseInt(user_detail.getCount.call());
 	for(var i = 1; i< count;i++){
		 var temp = user_detail.getAccount.call(i,password);
 		list[i] = {"account":temp[0],"password":temp[1],"account_type":temp[2]};
 	}
 	return list;

 }

 module.exports = {
	register,
	del,
	login,
	changePassword,
	getAddress,
	addAccount,
	delAccount,
	queryAccountList,
  }










