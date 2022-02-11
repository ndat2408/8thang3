import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
	const firebaseConfig = {
	  apiKey: "AIzaSyCxmgkXObHDb4xbx3cdd8LxpSsGmp6UBSg",  
	  authDomain: "project-7147797804174265420.firebaseapp.com",  
	  databaseURL: "https://project-7147797804174265420-default-rtdb.firebaseio.com",  
	  projectId: "project-7147797804174265420",
	  storageBucket: "project-7147797804174265420.appspot.com",
	  messagingSenderId: "1060781177419",
	  appId: "1:1060781177419:web:56356bfe90647b5fb86bce"
	};
	const app = initializeApp(firebaseConfig);
	import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
	const db = getDatabase()
	let second = 5
	btn.addEventListener("click",()=>{
		document.querySelector("#load").classList.add("block")
		set(ref(db, "/"+name),{dapan:document.querySelector("#ans").value})
        .then(()=>{
		document.querySelector("#load").classList.remove("block")
		document.querySelector("#myModal").classList.add("block")
		let interval = setInterval(() => {
			console.log(second--)
			document.querySelector("#time").innerHTML = second
			if (second==0){
				clearInterval(interval)
				document.querySelector("#time").innerHTML = 5
				document.querySelector("#myModal").classList.remove("block")
				second=5
			}
		}, 1000);
		ans.value=""
		})
		.catch((error)=>{
			alert("Lỗi rồi! Đưa máy cho t để t xem nhá\nTên lỗi: "+error);
		});
	})


	ans.addEventListener("keypress",(e)=>{
		if (e.key == "Enter"){
			document.querySelector("#load").classList.add("block")
			set(ref(db, "/"+name),{dapan:document.querySelector("#ans").value})
			.then(()=>{
			document.querySelector("#load").classList.remove("block")
			document.querySelector("#myModal").classList.add("block")
			let interval = setInterval(() => {
				console.log(second--)
				document.querySelector("#time").innerHTML = second
				if (second==0){
					clearInterval(interval)
					document.querySelector("#time").innerHTML = 5
					document.querySelector("#myModal").classList.remove("block")
					second=5
				}
			}, 1000);
			ans.value=""
			})
			.catch((error)=>{
				alert("Lỗi rồi! Đưa máy cho t để t xem nhá\nTên lỗi: "+error);
			});
		}
	})
	