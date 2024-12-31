package study01;

public class App {
    
    public static void main(String[] args) {
        System.out.println("안녕하세요.");
        int 정수 = 1;
        //final int 상수 = 2;
    
        모듈 객체 = new 모듈();
        System.out.println( 객체.기능1(1,4) );

        int a = 1;
        String b = "1";
        // if (a==b){}
        // 자바는 숫자와 문자를 비교 할 수 없음
        for(int i = 0; i < 5; i++){
            System.out.println(i);
        }

    // int add(int a, int b){
    //     return a + b;
    // }

    }
}
class 모듈 {
    public int 기능1(int a, int b){
        return a + b;
    }
    public int 기능2(int a, int b){
        return a + b;
    }
    public int 기능3(int a, int b){
        return a + b;
    }
}