import java.util.*;
class setcreate {
    public static void main(String args[]){
        Scanner sc=new Scanner (System.in);
        int n=sc.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        
        Set <Integer> set=new LinkedHashSet<>();
        for(int a:arr){
            set.add(a);
        }
        System.out.print(set);
        sc.close();
    }
    
}

