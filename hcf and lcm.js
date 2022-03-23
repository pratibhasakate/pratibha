//LCM HCF

let n1=25, n2=15,lcm=0
hcf=0,count=0
for(i=2;i<=n1;i++)
{
    if(count<2)
    {
    lcm = n1*i
    if(lcm%n2==0)
    {
        console.log(lcm);
        count++
    }
    if(n1%i==0 && n2%i==0)
    {
        hcf=i
        console.log(hcf)
        count++
    }
    }
    break
}