var series = {
		arithmetic : ()=> {
			/*1부터 100까지 등차수열의 합*/
				var sum=0;
				for(var i=0;i<=100;i++) {
					sum +=i;
				}
				return sum;
		},
		switchSeries : ()=> {
			var sum=0;
			var sw=0;
			var i=0;
			do {
				i=i+1;
				if(sw==0) {
					sum=sum+i;
					sw=1;
				}
				else {
					sum=sum-i;
					sw=0;
				}
			}while(i<100);
			return sum;
		},
		diffSeries : ()=> {
			var i=1,j=0,k=0;
			do{
				i+=j;
				k+=i;
				j++;
			}while(j<20);
			return k;
		},
		factorial : ()=> {
			var i=1,j=1,k=0;
			do{
				j=j*i;
				i++;
				k=k+j;
			}while(i<=10);
			return k;
		},
		fibonacci : ()=> {
			
			var a=1,b=1,c=0;sum=2,cnt=2;
			do{
				c=a+b;
				sum=sum+c;
				cnt++;
				if (cnt<20) {
					a=b;
					b=c;
				}
			}while(cnt<20);
			return sum;
		}
};
var sort = {
		selection : x=> {

			var i,j,temp;
			for (i=0;i<x.length;i++) {
				for (j=i;j<x.length;j++) {
					if (x[i]*1 > x[j+1]*1){
						temp=x[i];
						x[i]=x[j+1];
						x[j+1]=temp;
					}
				}
			}

			return x;
		},
		bubble : x=> {
			console.log('start'+x);
			var i,j,temp=0;
			for (i=0;i<x.length;i++) {
				for (j=0;j<x.length;j++) {
					if (x[j]*1 > x[j+1]*1){		
						temp=x[j];
						x[j]=x[j+1];
						x[j+1]=temp;
					}
				}
			}
			console.log('end'+x);
			return x;
		},
		insertion : x=> {
			var i,j,temp;
			for (i=0;i<x.length;i++) {
				for (j=0;j<x.length;j++) {
					if (x[i]*1 < x[j]*1) {
						temp = x[j];
						x[j] = x[i];
						x[i] = temp;
					}
				}
			}
			return x;
		},
		ranking : ()=> {
			return 'ranking';
		}
};
