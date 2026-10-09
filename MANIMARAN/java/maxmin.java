import java.util.*;
class maxmin{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int len=sc.nextInt();
        int arr[] =new int[len];
        for(int i=0;i<len;i++){
            arr[i]=sc.nextInt();

        }
    
        int max=arr[0];
        int min=arr[0];
        for(int i=0;i<len;i++){
            if(arr[i]>max){
                max=arr[i];
            }
            if(arr[i]<min){
                min=arr[i];
            }
        }
        System.out.println("Largest number"+" "+max);
        System.out.println("Smallestr number"+" "+min);
        sc.close();



}
}
