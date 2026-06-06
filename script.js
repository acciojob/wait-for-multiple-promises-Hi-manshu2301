const output = document.getElementById("output");
function createPromise(){
	const time = (Math.random()*2 + 1);
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(time);
		},time*1000);
	});
}
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

const start = performance.now();
Promise.all([promise1, promise2, promise3]).then((results)=>{
	const end = performance.now();
	const total = ((end -start)/1000).toFixed(3);
	output.innerHTML ="";
	results.forEach((time,index)=>{
		output.innerHTML += `
		<tr>
			<td>Promise ${index +1}</td>
			<td>${time.toFixed(3)}</td>
		</tr>`; 
	});
	output.innerHTML += `
		<tr>
			<td>Total</td>
			<td>${total}</td>
		</tr>
	`;
});
