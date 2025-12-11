import java.util.*;
public class diagonal{
     static ArrayList<Integer> diagonalOrder(int[][] mat) {
        ArrayList<Integer> res = new ArrayList<>();
        int row = mat.length;
        int col = mat[0].length;
        int j = 0;
        int i = 0;
        int count = 0;
        while(count<(row+col-1)){
            res.add(mat[i][j]);
            if (count<row-1){
                int start = i;
                int end = j;
                while(j!=start){
                    res.add(mat[--i][++j]);
                }
                i = start + 1;
                j = end;
            }
            else{
                int start = i;
                int end = j;
                while (i > 0 && j < col - 1) {
                    res.add(mat[--i][++j]);
                }
                i = start;
                j = end + 1;
            }
                
            count++;
        }
        return res;
     }
    public static void main(String[] args) {
        int[][] mat = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 },
            { 13, 14, 15, 16 },
            { 17, 18, 19, 20 }
        };
        ArrayList<Integer> res = diagonalOrder(mat);
        for (int val : res) System.out.print(val + " ");
        System.out.println();
    }
}