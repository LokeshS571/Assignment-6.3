var forsum=0,n=1000,whilesum=0;

// Sum is calculated using for loop
for(var i=1;i<=n;i++)
{
	forsum+=i;
}

i=n;
// sum is calculated using while loop
while(i!=0)
{
	whilesum+=i;
     i--;	
}	


// to display the area in the console
console.log("The Sum calculated using for loop is ",forsum);

console.log("The Sum calculated using while loop is ",whilesum); 
 

