export interface Program {
  id: string;
  category: string;
  title: string;
  description: string;
  code: string;
  output: string;
}

export const programs: Program[] = [
  {
    id: "ptr-dma-a",
    category: "Pointers - Dynamic Memory",
    title: "DMA - Reverse Array",
    description: "Accept N integers, store dynamically, display in reverse order",
    code: `#include<stdio.h>
#include<stdlib.h>
int main()
{
\tint *p,n,i;
\tprintf("How many numbers you want to enter: ");
\tscanf("%d",&n);

\tp=(int*)malloc(n * sizeof(int));

\tprintf("\\nEnter %d Numbers:\\n\\n",n);
\t
\tfor(i=0;i<n;i++)
\t{\t
\t\tscanf("%d",p+i);
\t}
\tprintf("\\nArray in Reverse Order: \\n\\n");
\t
\tfor(i=n-1;i>=0;i--)
\t{
\t\tprintf(" %d",*(p+i));
\t}
\treturn 0;
}`,
    output: `[ctbora@localhost dma]$ cc 3.c
[ctbora@localhost dma]$ ./a.out
How many numbers you want to enter: 5
Enter 5 Numbers:
15 46 85 96 75
Array in Reverse Order: 75 96 85 46 15`
  },
  {
    id: "ptr-dma-b",
    category: "Pointers - Dynamic Memory",
    title: "DMA - Display Matrix",
    description: "Accept a matrix and display it using dynamic memory allocation",
    code: `#include<stdio.h>
#include<stdlib.h>
main()
{
\tint *a[10],r,c,i,j;
\tprintf("Enter the order of matrix\\n");
\tscanf("%d%d",&r,&c);
\t
\tprintf("Enter matrix elements\\n");
\tfor(i=0;i<r;i++)
\t{
\t\t/**** dynamically allocate memory for every row ****/
\t\ta[i]=(int *)malloc(c*sizeof(int));
\t\tfor(j=0;j<c;j++)
\t\t{
\t\t\tscanf("%d",a[i]+j);
\t\t}
\t}

\t/****** Display Matrix ******/
\tprintf("The matrix is as below\\n");
\tfor(i=0;i<r;i++)
\t{
\t\tfor(j=0;j<c;j++)
\t\t{
\t\t\tprintf("%d\\t",*(*(a+i)+j));
\t\t}
\t\tprintf("\\n");
\t}
}`,
    output: `[ctbora@localhost dma]$ cc 2.c
[ctbora@localhost dma]$ ./a.out
Enter the order of matrix
2  3
Enter matrix elements
1 2 3 4 5 6
The matrix is as below
1\t2\t3
4\t5\t6`
  },
  {
    id: "ptr-dma-c",
    category: "Pointers - Dynamic Memory",
    title: "DMA - Calloc Sum",
    description: "Allocate memory with calloc (initialized to 0), display sum of n numbers",
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
\tint n, i, *ptr, sum = 0;
\tprintf("Enter number of elements: ");
\tscanf("%d", &n);

\tptr = (int*) calloc(n, sizeof(int));
\tif(ptr == NULL) {
\t\tprintf("Error! memory not allocated.");
\t\texit(0);
\t}

\tprintf("Enter elements: ");
\tfor(i = 0; i < n; ++i) {
\t\tscanf("%d", ptr + i);
\t\tsum += *(ptr + i);
\t}

\tprintf("Sum = %d", sum);
\tfree(ptr);
\treturn 0;
}`,
    output: `[ctbora@localhost dma]$ cc 4.c
[ctbora@localhost dma]$ ./a.out
Enter number of elements: 5
Enter elements: 12 45 65 78 23
Sum = 223`
  },
  {
    id: "ptr-dma-d",
    category: "Pointers - Dynamic Memory",
    title: "DMA - Find Maximum",
    description: "Accept N integers using dynamic memory allocation, find and display maximum",
    code: `#include<stdio.h>
#include<stdlib.h>

int main() 
{
\tint n,i;
\tdouble *data;
\tprintf("Enter the total number of elements: ");
\tscanf("%d", &n);

\tdata = (double *)calloc(n, sizeof(double));
\tif (data == NULL) 
\t{
\t\tprintf("Error!!! memory not allocated.");
\t\texit(0);
\t}

\tfor (i = 0; i < n; ++i)
\t{
\t\tprintf("Enter number%d: ", i + 1);
\t\tscanf("%lf", data + i);
\t}

\tfor(i = 1; i < n; ++i)
\t{
\t\tif (*data < *(data + i)) 
\t\t{
\t\t\t*data = *(data + i);
\t\t}
\t}
\tprintf("Largest number = %.2lf", *data);
\treturn 0;
}`,
    output: `[ctbora@localhost dma]$ cc 5.c
[ctbora@localhost dma]$ ./a.out
Enter the total number of elements: 5
Enter number1: 12
Enter number2: 32
Enter number3: 45
Enter number4: 78
Enter number5: 56
Largest number = 78.00`
  },
  {
    id: "ptr-dma-e",
    category: "Pointers - Dynamic Memory",
    title: "DMA - Sum & Average",
    description: "Accept n integers, copy non-zero elements, calculate sum and average",
    code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
\tint* ptr;
\tint limit;
\tint i;
\tint sum;

\tprintf("Enter limit of the array: ");
\tscanf("%d", &limit);

\tptr = (int*)malloc(limit * sizeof(int));

\tfor (i = 0; i < limit; i++) 
\t{
\t\tprintf("Enter element %02d: ", i + 1);
\t\tscanf("%d", (ptr + i));
\t}

\tprintf("\\nEntered array elements are:\\n");
\tfor (i = 0; i < limit; i++) 
\t{
\t\tprintf("%d\\n", *(ptr + i));
\t}

\tsum = 0;
\tfor (i = 0; i < limit; i++) 
\t{
\t\tsum += *(ptr + i);
\t}
\tprintf("Sum of array elements is: %d\\n", sum);
\tprintf("Average of array elements is : %f\\n", (float)sum/limit);
\tfree(ptr); 
\treturn 0;
}`,
    output: `[ctbora@localhost dma]$ ./a.out
Enter limit of the array: 5
Enter element 01: 12
Enter element 02: 35
Enter element 03: 25
Enter element 04: 62
Enter element 05: 78

Entered array elements are:
12 35 25 62 78
Sum of array elements is: 212
Average of array elements is : 42.400000`
  },
  {
    id: "ptr-dma-f",
    category: "Pointers - Dynamic Memory",
    title: "DMA - Matrix Diagonal Sum",
    description: "Accept matrix using DMA, display trace/sum of diagonal elements",
    code: `#include<stdlib.h>
#include<stdio.h>

int main()
{
\tint m, n, i, j, sum=0;
\tprintf("Enter no. of rows and columns: ");
\tscanf("%d%d", &m, &n);

\tint **a;

\ta = (int **) malloc(m * sizeof(int *));
\tfor(i=0; i<m; i++)
\t{
\t\ta[i] = (int *) malloc(n * sizeof(int));
\t}

\tprintf("Enter matrix elements: ");
\tfor(i=0; i<m; i++)
\t{
\t\tfor(j=0; j<n; j++)
\t\t{
\t\t\tscanf("%d", &a[i][j]);
\t\t}
\t}

\tprintf("Diagonal elements are: \\n");
\tfor(i=0; i<m; i++)
\t{
\t\tfor(j=0; j<n; j++)
\t\t{
\t\t\tif(i==j)
\t\t\t{
\t\t\t\tprintf("%d ", a[i][j]);
\t\t\t\tsum = sum + a[i][j];
\t\t\t}
\t\t}
\t\tprintf("\\n");
\t}
\tprintf("Sum=%d", sum);

\tfor(i=0; i<m; i++)
\t\tfree(a[i]);
\tfree(a);
\treturn 0;
}`,
    output: `[ctbora@localhost dma]$ ./a.out
Enter no. of rows and columns: 2 2
Enter matrix elements: 1 2 3 4
Diagonal elements are:
1
4
Sum=5`
  },
  {
    id: "ptr-dma-g",
    category: "Pointers - Dynamic Memory",
    title: "DMA - Columnwise Sum",
    description: "Accept matrix using DMA and array of pointers, display columnwise sum",
    code: `#include<stdlib.h>
#include<stdio.h>
int main()
{
\tint m, n, i, j, sum=0;
\tprintf("Enter no. of rows and columns: ");
\tscanf("%d%d", &m, &n);
\tint **a;

\ta = (int **) malloc(m * sizeof(int *));
\tfor(i=0; i<m; i++)
\t{
\t\ta[i] = (int *) malloc(n * sizeof(int));
\t}

\tprintf("Enter matrix elements: ");
\tfor(i=0; i<m; i++)
\t{
\t\tfor(j=0; j<n; j++)
\t\t{
\t\t\tscanf("%d", &a[i][j]);
\t\t}
\t}

\tprintf("Matrix elements are: \\n");
\tfor(i=0; i<m; i++)
\t{
\t\tfor(j=0; j<n; j++)
\t\t{
\t\t\tprintf("%d ", a[i][j]);
\t\t}
\t\tprintf("\\n");
\t}

\tprintf("Column elements are: \\n");
\tfor(i=0; i<m; i++)
\t{
\t\tfor(j=i; j<n; j++)
\t\t{
\t\t\tprintf("%d ", a[i][j]);
\t\t\tsum = sum + a[i][j];
\t\t}
\t\tprintf("\\n");
\t}
\tprintf("Sum=%d", sum);

\tfor(i=0; i<m; i++)
\t\tfree(a[i]);
\tfree(a);
\treturn 0;
}`,
    output: `[ctbora@localhost dma]$ ./a.out
Enter no. of rows and columns: 2 2
Enter matrix elements: 1 2 3 4
Matrix elements are:
1 2
3 4
Diagonal elements are:
1
4
Sum=5`
  },
  {
    id: "ptr-basic-a",
    category: "Pointers - Basic",
    title: "Pointer Arithmetic Operations",
    description: "Read two integers using pointers and perform all arithmetic operations",
    code: `#include<stdio.h>
int main()
{
\tint no1, no2;
\tint *ptr1, *ptr2;
\tint sum, sub, mult;
\tfloat div;

\tprintf("Enter number1:\\n");
\tscanf("%d", &no1);
\tprintf("Enter number2:\\n");
\tscanf("%d", &no2);

\tptr1 = &no1;
\tptr2 = &no2;

\tsum = (*ptr1) + (*ptr2);
\tsub = (*ptr1) - (*ptr2);
\tmult = (*ptr1) * (*ptr2);
\tdiv = (float)(*ptr1) / (*ptr2);

\tprintf("sum= %d\\n", sum);
\tprintf("subtraction= %d\\n", sub);
\tprintf("Multiplication= %d\\n", mult);
\tprintf("Division= %f\\n", div);
\treturn 0;
}`,
    output: `[student@localhost pointer]$ ./a.out
Enter number1: 23
Enter number2: 34
sum= 57
subtraction= -11
Multiplication= 782
Division= 0.676471`
  },
  {
    id: "ptr-basic-b",
    category: "Pointers - Basic",
    title: "Even or Odd using Pointer",
    description: "Accept an integer using pointer and check whether it is even or odd",
    code: `#include<stdio.h>
int main()
{
\tint num, rem;
\tint *pnum;
\tpnum = &num;

\tprintf("Enter number: ");
\tscanf("%d", pnum);

\trem = *pnum % 2;

\tif(rem == 0)
\t\tprintf("%d is even.\\n", *pnum);
\telse
\t\tprintf("%d is odd.\\n", *pnum);

\treturn 0;
}`,
    output: `[student@localhost pointer]$ ./a.out
Enter number: 12
12 is even.
[student@localhost pointer]$ ./a.out
Enter number: 35
35 is odd.`
  },
  {
    id: "ptr-basic-c",
    category: "Pointers - Basic",
    title: "Maximum of Three using Pointers",
    description: "Find maximum from three integers using pointers",
    code: `#include<stdio.h>
int main()
{
\tfloat x, y, z;
\tfloat *px, *py, *pz;
\tpx = &x; py = &y; pz = &z;

\tprintf("Enter three number:");
\tscanf("%f %f %f", px, py, pz);

\tif(*px > *py)
\t{
\t\tif(*px > *pz)
\t\t\tprintf("Biggest = %.2f", *px);
\t\telse
\t\t\tprintf("Biggest = %.2f", *pz);
\t}
\telse
\t{
\t\tif(*py > *pz)
\t\t\tprintf("Biggest = %.2f", *py);
\t\telse
\t\t\tprintf("Biggest = %.2f", *pz);
\t}

\treturn 0;
}`,
    output: `[student@localhost pointer]$ ./a.out
Enter three number: 12 67 45
Biggest = 67.00`
  },
  {
    id: "ptr-basic-d",
    category: "Pointers - Basic",
    title: "Reverse Array using Pointers",
    description: "Accept array elements and display in reverse using pointers",
    code: `#include<stdio.h>
#define MAX 30

int main()
{
\tint size, i, arr[MAX];
\tint *ptr;

\tptr = &arr[0];

\tprintf("Enter the size of array :: ");
\tscanf("%d", &size);

\tprintf("\\nEnter %d integers into array:\\n", size);
\tfor (i = 0; i < size; i++)
\t{
\t\tprintf("\\nEnter %d integer into array: ", i+1);
\t\tscanf("%d", ptr);
\t\tptr++;
\t}

\tptr = &arr[size - 1];

\tprintf("\\nElements of array in reverse order are :\\n");
\tfor (i = size - 1; i >= 0; i--) 
\t{
\t\tprintf("\\nElement %d is %d  ", i+1, *ptr);
\t\tptr--;
\t}

\treturn 0;
}`,
    output: `[student@localhost pointer]$ ./a.out
Enter the size of array :: 5
Enter 5 integers into array:
Enter 1 integer: 34
Enter 2 integer: 56
Enter 3 integer: 3
Enter 4 integer: 89
Enter 5 integer: 0
Elements of array in reverse order are:
Element 5 is 0
Element 4 is 89
Element 3 is 3
Element 2 is 56
Element 1 is 34`
  },
  {
    id: "ptr-basic-e",
    category: "Pointers - Basic",
    title: "Find Minimum using Pointers",
    description: "Read N integers in an array using pointers and display minimum",
    code: `#include <stdio.h>

main() 
{
\tint array[100], *minimum, size, c, location = 1;

\tprintf("Enter the number of elements in array\\n");
\tscanf("%d", &size);

\tprintf("Enter %d integers\\n", size);

\tfor (c = 0; c < size; c++)
\t\tscanf("%d", &array[c]);

\tminimum = array;
\t*minimum = *array;

\tfor (c = 1; c < size; c++) 
\t{
\t\tif (*(array+c) < *minimum) 
\t\t{
\t\t\t*minimum = *(array+c);
\t\t\tlocation = c+1;
\t\t}
\t}

\tprintf("Minimum element is at location %d and value is %d.\\n", location, *minimum);
\treturn 0;
}`,
    output: `[student@localhost pointer]$ ./a.out
Enter the number of elements in array: 5
Enter 5 integers
23 45 87 47 12
Minimum element is at location 5 and value is 12.`
  },
  {
    id: "ptr-basic-f",
    category: "Pointers - Basic",
    title: "Area & Perimeter of Circle",
    description: "Function that takes radius and sets area and perimeter using pointers",
    code: `#include<stdio.h>

void area_peri(float, float*, float*);

int main()
{
\tfloat radius, area, perimeter;

\tprintf("Enter radius of Circle\\n");
\tscanf("%f", &radius);

\tarea_peri(radius, &area, &perimeter);

\tprintf("\\nArea of Circle = %0.2f\\n", area);
\tprintf("Perimeter of Circle = %0.2f\\n", perimeter);

\treturn 0;
}

void area_peri(float r, float *a, float *p)
{
\t*a = 3.14 * r * r;
\t*p = 2 * 3.14 * r;
}`,
    output: `[student@localhost pointer]$ ./a.out
Enter radius of Circle
4.5
Area of Circle = 63.58
Perimeter of Circle = 28.26`
  },
  {
    id: "ptr-basic-g",
    category: "Pointers - Basic",
    title: "Array Min & Max using Function",
    description: "Accept n integers, find min and max using a function",
    code: `#include <stdio.h>

int sumofarray(int a[], int n)
{
\tint min, max, i;
\tmin = max = a[0];
\tfor(i=1; i<n; i++)
\t{
\t\tif(min > a[i])
\t\t\tmin = a[i];
\t\tif(max < a[i])
\t\t\tmax = a[i];
\t}
\tprintf("minimum of array is : %d", min);
\tprintf("\\nmaximum of array is : %d", max);
}

int main()
{
\tint a[1000], i, n, sum;

\tprintf("Enter size of the array : ");
\tscanf("%d", &n);

\tprintf("Enter elements in array : ");
\tfor(i=0; i<n; i++)
\t{
\t\tscanf("%d", &a[i]);
\t}
\tsumofarray(a, n);
}`,
    output: `[student@localhost pointer]$ ./a.out
Enter size of the array : 5
Enter elements in array : 12 45 67 89 43
minimum of array is : 12
maximum of array is : 89`
  },
  {
    id: "str-a",
    category: "Strings",
    title: "String Copy & Length",
    description: "Read a string, copy to another, display copied string and its length",
    code: `// Without Standard Function
#include <stdio.h>
int main() 
{
\tchar s1[100], s2[100], i;
\tprintf("Enter string s1: ");
\tgets(s1);
\tfor (i = 0; s1[i] != '\\0'; ++i) 
\t{
\t\ts2[i] = s1[i];
\t}
\ts2[i] = '\\0';
\tprintf("String s2: %s", s2);
\treturn 0;
}

// Using Standard Function
#include<stdio.h>
#include<string.h>

void main()
{
\tchar s1[100], s2[100];
\tprintf("\\nEnter string s1: ");
\tgets(s1);
\tstrcpy(s2, s1);
\tprintf("\\nS1=%s\\nS2=%s", s1, s2);
}`,
    output: `[ctbora@localhost string]$ ./a.out
Enter string s1: rahul
S1=rahul
S2=rahul`
  },
  {
    id: "str-b",
    category: "Strings",
    title: "Find Character in String",
    description: "Read a string and character, check if character is present using strchr/strrchr",
    code: `#include <stdio.h>
#include <string.h>

int main () 
{
\tint len;
\tchar str[50];
\tchar ch;
\tprintf("\\nEnter the string: ");
\tgets(str);
\tprintf("\\nEnter the character to find: ");
\tscanf("%c", &ch);

\tchar *ret;

\tret = strrchr(str, ch);
\tif(ret == NULL)
\t\tprintf("The character not found");
\telse
\t\tprintf("The Character %c is found at %s", ch, ret);

\treturn(0);
}`,
    output: `[rsp@localhost string]$ ./a.out
Enter the string: rahul
Enter the character to find: r
The Character r is found at rahul`
  },
  {
    id: "str-c",
    category: "Strings",
    title: "Alter String (Space/Case/Digits)",
    description: "Replace spaces with *, reverse case, replace digits with ?",
    code: `#include<stdio.h>
#include<ctype.h>
#include<string.h>

void Stral(char str[])
{
\tint i;
\tfor(i=0; i<=strlen(str)-1; i++)
\t{
\t\tif(str[i] == ' ')
\t\t\tstr[i] = '*';
\t\tif(islower(str[i]))
\t\t\tstr[i] = toupper(str[i]);
\t\telse
\t\t\tstr[i] = tolower(str[i]);
\t\tif(isdigit(str[i]))
\t\t\tstr[i] = '?';
\t}
\tprintf("\\n %s \\n", str);
}

void main()
{
\tchar str[100];
\tprintf("\\n Enter any sentence: ");
\tfgets(str, 100, stdin);
\tStral(str);
}`,
    output: `[rsp@localhost string]$ ./a.out
Enter any sentence: I 143 C Programming.
i*???*c*pROGRAMMING.`
  },
  {
    id: "str-d",
    category: "Strings",
    title: "Reverse Words in Sentence",
    description: "Accept a sentence and display reverse of it without using any function",
    code: `#include <stdio.h>
#include <string.h>

void printReverse(char str[])
{
\tint length = strlen(str);
\tint i;
\tfor (i = length - 1; i >= 0; i--) 
\t{
\t\tif (str[i] == ' ') 
\t\t{
\t\t\tstr[i] = '\\0';
\t\t\tprintf("%s ", &(str[i]) + 1);
\t\t}
\t}
\tprintf("%s", str);
}

int main()
{
\tchar str[50];
\tprintf("\\nEnter the string: ");
\tgets(str);
\tprintReverse(str);
\treturn 0;
}`,
    output: `[rsp@localhost string]$ ./a.out
Enter the string: I love C programming
programming C love I`
  },
  {
    id: "str-e",
    category: "Strings",
    title: "Dictionary Order Sort",
    description: "Accept n words and output them in dictionary (lexicographical) order",
    code: `#include<stdio.h>
#include <string.h>

int main()
{
\tint i, j;
\tchar str[10][50], temp[50];

\tprintf("\\nEnter 10 words:: \\n");

\tfor(i=0; i<10; ++i)
\t\tscanf("%s", str[i]);

\tfor(i=0; i<9; ++i)
\t\tfor(j=i+1; j<10; ++j)
\t\t{
\t\t\tif(strcmp(str[i], str[j]) > 0)
\t\t\t{
\t\t\t\tstrcpy(temp, str[i]);
\t\t\t\tstrcpy(str[i], str[j]);
\t\t\t\tstrcpy(str[j], temp);
\t\t\t}
\t\t}

\tprintf("\\nIn lexicographical order: \\n");
\tfor(i=0; i<10; ++i)
\t{
\t\tputs(str[i]);
\t}
\treturn 0;
}`,
    output: `[rsp@localhost string]$ ./a.out
Enter 10 words::
c programming dbms rdbms math stat rsp pqr xyz abc
In lexicographical order:
abc c dbms math pqr programming rdbms rsp stat xyz`
  },
  {
    id: "str-f",
    category: "Strings",
    title: "String Permutations",
    description: "Accept a string and generate all its permutations",
    code: `#include <stdio.h>
#include <string.h>

void swap(char *x, char *y)
{
\tchar temp;
\ttemp = *x;
\t*x = *y;
\t*y = temp;
}

void permute(char *a, int l, int r)
{
\tint i;
\tif (l == r)
\t\tprintf("%s\\n", a);
\telse
\t{
\t\tfor (i = l; i <= r; i++)
\t\t{
\t\t\tswap((a+l), (a+i));
\t\t\tpermute(a, l+1, r);
\t\t\tswap((a+l), (a+i)); //backtrack
\t\t}
\t}
}

int main()
{
\tchar str[] = "ABC";
\tint n = strlen(str);
\tpermute(str, 0, n-1);
\treturn 0;
}`,
    output: `ABC
ACB
BAC
BCA
CBA
CAB`
  },
  {
    id: "str-g",
    category: "Strings",
    title: "Menu - String Operations",
    description: "Menu driven: Length, Copy, Concatenation, Compare, Reverse",
    code: `#include<stdio.h>
#include<string.h>
#include<stdlib.h>

char *strrev(char *str);

int main()
{
\tchar str1[20], str2[20];
\tint ch, i, j;
\tdo
\t{
\t\tprintf("\\tMENU\\n");
\t\tprintf("------------------------------\\n");
\t\tprintf("1:Find Length of String\\n");
\t\tprintf("2:Find Reverse of String\\n");
\t\tprintf("3:Concatenate Strings\\n");
\t\tprintf("4:Copy String\\n");
\t\tprintf("5:Compare Strings\\n");
\t\tprintf("6:Exit\\n");
\t\tprintf("------------------------------\\n");
\t\tprintf("Enter your choice: ");
\t\tscanf("%d", &ch);

\t\tswitch(ch)
\t\t{
\t\t\tcase 1:
\t\t\t\tprintf("Enter String: ");
\t\t\t\tscanf("%s", str1);
\t\t\t\ti = strlen(str1);
\t\t\t\tprintf("Length of String : %d\\n\\n", i);
\t\t\t\tbreak;
\t\t\tcase 2:
\t\t\t\tprintf("Enter String: ");
\t\t\t\tscanf("%s", str1);
\t\t\t\tprintf("Reverse string : %s\\n\\n", strrev(str1));
\t\t\t\tbreak;
\t\t\tcase 3:
\t\t\t\tprintf("Enter First String: ");
\t\t\t\tscanf("%s", str1);
\t\t\t\tprintf("Enter Second string: ");
\t\t\t\tscanf("%s", str2);
\t\t\t\tstrcat(str1, str2);
\t\t\t\tprintf("After Concatenation : %s\\n\\n", str1);
\t\t\t\tbreak;
\t\t\tcase 4:
\t\t\t\tprintf("Enter String1: ");
\t\t\t\tscanf("%s", str1);
\t\t\t\tprintf("Enter String2: ");
\t\t\t\tscanf("%s", str2);
\t\t\t\tstrcpy(str2, str1);
\t\t\t\tprintf("After Copy: S1=\\"%s\\", S2=\\"%s\\"\\n\\n", str1, str2);
\t\t\t\tbreak;
\t\t\tcase 5:
\t\t\t\tprintf("Enter First String: ");
\t\t\t\tscanf("%s", str1);
\t\t\t\tprintf("Enter Second String: ");
\t\t\t\tscanf("%s", str2);
\t\t\t\tj = strcmp(str1, str2);
\t\t\t\tif(j == 0)
\t\t\t\t\tprintf("Strings are Same\\n\\n");
\t\t\t\telse
\t\t\t\t\tprintf("Strings are Not Same\\n\\n");
\t\t\t\tbreak;
\t\t\tcase 6:
\t\t\t\texit(0);
\t\t\t\tbreak;
\t\t\tdefault:
\t\t\t\tprintf("Invalid Input.\\n\\n");
\t\t}
\t} while(ch != 6);
\treturn 0;
}

char *strrev(char *str)
{
\tif (!str || !*str)
\t\treturn str;
\tint i = strlen(str) - 1, j = 0;
\tchar ch;
\twhile (i > j)
\t{
\t\tch = str[i];
\t\tstr[i] = str[j];
\t\tstr[j] = ch;
\t\ti--;
\t\tj++;
\t}
\treturn str;
}`,
    output: `Enter your choice: 1
Enter String: programming
Length of String : 11

Enter your choice: 2
Enter String: programming
Reverse string : gnimmargorp`
  },
  {
    id: "str-h",
    category: "Strings",
    title: "String Length (User Defined)",
    description: "Accept a string and find its length using user defined function",
    code: `#include<stdio.h>

int FindLength(char str[]);

int main() 
{
\tchar str[100];
\tint length;

\tprintf("\\nEnter the String : ");
\tgets(str);

\tlength = FindLength(str);

\tprintf("\\nLength of the String is : %d", length);
\treturn(0);
}

int FindLength(char str[]) 
{
\tint len = 0;
\twhile (str[len] != '\\0')
\t\tlen++;
\treturn (len);
}`,
    output: `[root@localhost string]# ./a.out
Enter the String : rahul
Length of the String is : 5`
  },
  {
    id: "str-i",
    category: "Strings",
    title: "Convert to Uppercase",
    description: "Accept string and convert to uppercase using pointers",
    code: `#include <stdio.h>
#define MAX_SIZE 100

int main()
{
\tchar str[MAX_SIZE];
\tint i;

\tprintf("Enter your text : ");
\tgets(str);

\tfor(i=0; str[i]!='\\0'; i++)
\t{
\t\tif(str[i]>='a' && str[i]<='z')
\t\t{
\t\t\tstr[i] = str[i] - 32;
\t\t}
\t}

\tprintf("Uppercase string : %s", str);
\treturn 0;
}`,
    output: `[root@localhost string]# ./a.out
Enter your text : c programming
Uppercase string : C PROGRAMMING`
  },
  {
    id: "str-j",
    category: "Strings",
    title: "Reverse String Function",
    description: "Find reverse of the string using a function",
    code: `#include <stdio.h>
#include <string.h>

char *strrev(char *str);

void main()
{
\tchar str[20];
\tprintf("\\nEnter the string\\n");
\tgets(str);
\tprintf("\\nThe reverse is %s", strrev(str));
}

char *strrev(char *str)
{
\tif (!str || !*str)
\t\treturn str;
\tint i = strlen(str) - 1, j = 0;
\tchar ch;
\twhile (i > j)
\t{
\t\tch = str[i];
\t\tstr[i] = str[j];
\t\tstr[j] = ch;
\t\ti--;
\t\tj++;
\t}
\treturn str;
}`,
    output: `[root@localhost string]# ./a.out
Enter the string
C Programming
The reverse is gnimmargorP C`
  },
  {
    id: "str-k",
    category: "Strings",
    title: "Character Frequency & Position",
    description: "Accept string and character, find frequency and positions of occurrence",
    code: `#include <stdio.h>
int main() 
{
\tchar str[1000], ch;
\tint count = 0, i;

\tprintf("Enter a string: ");
\tgets(str);

\tprintf("Enter a character to find its frequency: ");
\tscanf("%c", &ch);

\tfor (i = 0; str[i] != '\\0'; ++i) 
\t{
\t\tif (ch == str[i])
\t\t{
\t\t\t++count;
\t\t\tprintf("\\nCharacter %c found at position %d", ch, i);
\t\t}
\t}
\tprintf("\\nFrequency of %c = %d", ch, count);
\treturn 0;
}`,
    output: `Enter a string: geekforgeeks
Enter a character to find its frequency: e
Character e found at position 1
Character e found at position 2
Character e found at position 8
Character e found at position 9
Frequency of e = 4`
  },
  {
    id: "cmd-a",
    category: "Command Line Arguments",
    title: "Display Args in Reverse",
    description: "Display command line arguments in reverse order",
    code: `#include<stdio.h>
#include<stdlib.h>
int main(int argc, char *argv[])
{
\tint i;
\tfor(i=argc-1; i>0; i--)
\t\tprintf("\\n Argument [%d] is : %s", i, argv[i]);
\treturn 0;
}`,
    output: `[localhost]$ ./a.out 1 str 1.2
Argument [3] is : 1.2
Argument [2] is : str
Argument [1] is : 1`
  },
  {
    id: "cmd-b",
    category: "Command Line Arguments",
    title: "Min, Max, Average of 3 Args",
    description: "Accept three integers as command line args, find min, max and average",
    code: `#include<stdio.h>
#include<stdlib.h>

void main(int argc, char *argv[])
{
\tint i, sum=0;
\tfloat avg;
\tint max, min;

\tif(argc != 4)
\t{
\t\tprintf("You have forgot to type numbers.");
\t\texit(1);
\t}

\tprintf("\\nargc count=%d", argc);
\tfor(i=1; i<argc; i++)
\t{
\t\tprintf("\\nargv[%d]=%d", i, atoi(argv[i]));
\t\tsum = sum + atoi(argv[i]);
\t}

\tprintf("\\nSum=%d", sum);
\tavg = (float)sum / 3;
\tprintf("\\nThe average is %f", avg);

\tmax = atoi(argv[1]);
\tmin = atoi(argv[1]);
\tfor(i=1; i<argc; i++)
\t{
\t\tif(atoi(argv[i]) > max)
\t\t\tmax = atoi(argv[i]);
\t\tif(atoi(argv[i]) < min)
\t\t\tmin = atoi(argv[i]);
\t}

\tprintf("\\nThe maximum number is %d", max);
\tprintf("\\nThe minimum number is %d", min);
}`,
    output: `[localhost]$ ./a.out 15 12 89
argc count=4
argv[1]=15
argv[2]=12
argv[3]=89
Sum=116
The average is 38.666668
The maximum number is 89
The minimum number is 12`
  },
  {
    id: "cmd-c",
    category: "Command Line Arguments",
    title: "Replace Character in String",
    description: "Accept string and two characters as args, replace first char with second",
    code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
\tchar ch, Newch;
\tint i;

\tif(argc != 4)
\t{
\t\tprintf("\\nInsufficient arguments");
\t\texit(0);
\t}

\tch = argv[2][0];
\tNewch = argv[3][0];

\tfor(i = 0; i <= strlen(argv[1]); i++)
\t{
\t\tif(argv[1][i] == ch)
\t\t{
\t\t\targv[1][i] = Newch;
\t\t}
\t}

\tprintf("\\nAfter Replacing '%c' with '%c' = %s", ch, Newch, argv[1]);
\treturn 0;
}`,
    output: `[localhost]$ ./a.out geeksforgeeks e f
After Replacing 'e' with 'f' = gffksforgffks`
  },
  {
    id: "cmd-d",
    category: "Command Line Arguments",
    title: "Factorial or Even/Odd",
    description: "Two args: if second is 1, show factorial; if 2, check even/odd",
    code: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
\tint num, fact, n;

\tif(argc != 3) {
\t\tprintf("Invalid Usage.\\n\\n");
\t\texit(0);
\t}

\tnum = atoi(argv[1]);

\tif(atoi(argv[2]) == 1)
\t{
\t\tfact = 1;
\t\tint temp = num;
\t\twhile(temp >= 1)
\t\t{
\t\t\tfact = fact * temp;
\t\t\ttemp--;
\t\t}
\t\tprintf("Factorial of %d = %d\\n", num, fact);
\t}
\telse if(atoi(argv[2]) == 2)
\t{
\t\tif(num % 2 == 0)
\t\t\tprintf("\\n%d is even", num);
\t\telse
\t\t\tprintf("\\n%d is odd", num);
\t}

\treturn 0;
}`,
    output: `[localhost]$ ./a.out 6 2
6 is even
[localhost]$ ./a.out 5 2
5 is odd`
  },
  {
    id: "cmd-e",
    category: "Command Line Arguments",
    title: "File Copy using Args",
    description: "Copy file contents from source to destination using command line arguments",
    code: `#include<stdio.h>
int main(int argc, char *argv[])
{
\tFILE *fs, *ft;
\tint ch;
\tif(argc != 3)
\t{
\t\tprintf("Invalid number of arguments.");
\t\treturn 1;
\t}
\tfs = fopen(argv[1], "r");
\tif(fs == NULL)
\t{
\t\tprintf("Can't find the source file.");
\t\treturn 1;
\t}
\tft = fopen(argv[2], "w");
\tif(ft == NULL)
\t{
\t\tprintf("Can't open target file.");
\t\tfclose(fs);
\t\treturn 1;
\t}

\twhile(1)
\t{
\t\tch = fgetc(fs);
\t\tif (feof(fs)) break;
\t\tfputc(ch, ft);
\t}
\tprintf("File Copied Successfully ....");
\tfclose(fs);
\tfclose(ft);
\treturn 0;
}`,
    output: `[localhost]$ ./a.out file3.txt filecopy.txt
File Copied Successfully ....`
  },
  {
    id: "struct-a",
    category: "Structures & Unions",
    title: "Employee Details",
    description: "Create structure employee (id, name, salary), accept and display details",
    code: `#include <stdio.h>
#include <stdlib.h>

typedef struct
{
\tchar name[30];
\tint id;
\tdouble salary;
} Employee;

int main()
{
\tint n=2, i;

\tEmployee employees[n];

\tprintf("Enter %d Employee Details\\n\\n", n);
\tfor(i=0; i<n; i++)
\t{
\t\tprintf("Employee %d:-\\n", i+1);
\t\tprintf("Name: ");
\t\tscanf("%[^\\n]s", employees[i].name);
\t\tprintf("Id: ");
\t\tscanf("%d", &employees[i].id);
\t\tprintf("Salary: ");
\t\tscanf("%lf", &employees[i].salary);
\t\tchar ch = getchar();
\t\tprintf("\\n");
\t}

\tprintf("---------- All Employees ----------\\n");
\tfor(i=0; i<n; i++)
\t{
\t\tprintf("Name   : %s\\n", employees[i].name);
\t\tprintf("Id     : %d\\n", employees[i].id);
\t\tprintf("Salary : %.2lf\\n\\n", employees[i].salary);
\t}
\treturn 0;
}`,
    output: `Enter 2 Employee Details

Employee 1:-
Name: rahul
Id: 101
Salary: 50000

Employee 2:-
Name: pawar
Id: 102
Salary: 60000

---------- All Employees ----------
Name   : rahul
Id     : 101
Salary : 50000.00

Name   : pawar
Id     : 102
Salary : 60000.00`
  },
  {
    id: "struct-b",
    category: "Structures & Unions",
    title: "Item Bill Generator",
    description: "Structure item with rate, qty, total - display bill with grand total",
    code: `#include<stdio.h>
struct item
{
\tint code;
\tchar name[10];
\tint price;
\tint qty;
\tfloat cost;
} s[3];

void input(struct item up[], int n)
{
\tint i;
\tfor(i=0; i<n; i++)
\t{
\t\tprintf("%d ITEM CODE: ", i+1);
\t\tscanf("%d", &up[i].code);
\t\tprintf("ITEM NAME: ");
\t\tscanf("%s", up[i].name);
\t\tprintf("ITEM PRICE: ");
\t\tscanf("%d", &up[i].price);
\t\tprintf("ITEM QTY: ");
\t\tscanf("%d", &up[i].qty);
\t}
}

void output(struct item up[], int n)
{
\tint i;
\tfloat tcost = 0.0;
\tfor(i=0; i<n; i++)
\t{
\t\tprintf("\\n%d ITEM CODE: %d", i+1, up[i].code);
\t\tprintf("\\nITEM NAME: %s", up[i].name);
\t\tprintf("\\nITEM PRICE: %d", up[i].price);
\t\tprintf("\\nITEM QTY: %d", up[i].qty);
\t\tup[i].cost = up[i].price * up[i].qty;
\t\ttcost += up[i].cost;
\t\tprintf("\\nITEM COST: %.2f\\n", up[i].cost);
\t}
\tprintf("\\nTOTAL BILL: %.2f", tcost);
}

void main()
{
\tinput(s, 3);
\toutput(s, 3);
}`,
    output: `1 ITEM CODE: 101
ITEM NAME: Pen
ITEM PRICE: 10
ITEM QTY: 3

1 ITEM CODE: 101
ITEM NAME: Pen
ITEM PRICE: 10
ITEM QTY: 3
ITEM COST: 30.00

TOTAL BILL: 35.00`
  },
  {
    id: "file-b",
    category: "File Handling",
    title: "Count Words, Lines & Characters",
    description: "Accept filename and count words, lines and characters in the file",
    code: `#include <stdio.h>
#include <stdlib.h>

void main() 
{ 
\tFILE *fptr; 
\tchar ch; 
\tint wrd=1, charctr=1;
\tchar fname[20];
\tprintf("\\n Count the number of words and characters in a file :\\n");
\tprintf("---------------------------------------------------------\\n"); 
\tprintf(" Input the filename to be opened : ");
\tscanf("%s", fname);    

\tfptr = fopen(fname, "r"); 
\tif(fptr == NULL) 
\t{ 
\t\tprintf(" File does not exist or can not be opened."); 
\t} 
\telse 
\t{ 
\t\tch = fgetc(fptr); 
\t\tprintf(" The content of the file %s are : ", fname); 
\t\twhile(ch != EOF) 
\t\t{ 
\t\t\tprintf("%c", ch); 
\t\t\tif(ch == ' ' || ch == '\\n')
\t\t\t{ 
\t\t\t\twrd++; 
\t\t\t}
\t\t\telse
\t\t\t{
\t\t\t\tcharctr++; 
\t\t\t}
\t\t\tch = fgetc(fptr); 
\t\t}
\t\tprintf("\\n The number of words in the file %s are : %d\\n", fname, wrd-2); 
\t\tprintf(" The number of characters in the file %s are : %d\\n\\n", fname, charctr-1);         
\t} 
\tfclose(fptr); 
}`,
    output: `Count the number of words and characters in a file :
---------------------------------------------------------
Input the filename to be opened : 1.c
The number of words in the file 1.c are : 137
The number of characters in the file 1.c are : 570`
  },
  {
    id: "file-c",
    category: "File Handling",
    title: "Encrypt File using Key",
    description: "Accept filename and encrypt the file using a key (Caesar cipher)",
    code: `#include<stdio.h>
int main()
{
\tchar fname[20], ch;
\tFILE *fps, *fpt;
\tprintf("Enter Filename: ");
\tgets(fname);
\tfps = fopen(fname, "r");
\tif(fps == NULL)
\t\treturn 0;
\tfpt = fopen("temp.txt", "w");
\tif(fpt == NULL)
\t\treturn 0;
\tch = fgetc(fps);
\twhile(ch != EOF)
\t{
\t\tch = ch + 100;
\t\tfputc(ch, fpt);
\t\tch = fgetc(fps);
\t}
\tfclose(fps);
\tfclose(fpt);
\tfps = fopen(fname, "w");
\tif(fps == NULL)
\t\treturn 0;
\tfpt = fopen("temp.txt", "r");
\tif(fpt == NULL)
\t\treturn 0;
\tch = fgetc(fpt);
\twhile(ch != EOF)
\t{
\t\tfputc(ch, fps);
\t\tch = fgetc(fpt);
\t}
\tfclose(fps);
\tfclose(fpt);
\tprintf("\\nFile %s Encrypted Successfully!", fname);
\treturn 0;
}`,
    output: `[rsp@localhost File]$ ./a.out 
Enter Filename: demo.txt
File demo.txt Encrypted Successfully!`
  },
  {
    id: "file-d",
    category: "File Handling",
    title: "Compare Two Files",
    description: "Compare two files character by character and check whether they are same",
    code: `#include<stdio.h>
#include<stdlib.h> 
int main()
{
\tFILE *fp1, *fp2;
\tint ch1, ch2;
\tchar fname1[40], fname2[40];

\tprintf("Enter name of first file : ");
\tgets(fname1);
\tprintf("Enter name of second file: ");
\tgets(fname2);

\tfp1 = fopen(fname1, "r");
\tfp2 = fopen(fname2, "r");

\tif (fp1 == NULL) 
\t{
\t\tprintf("Cannot open %s for reading ", fname1);
\t\texit(1);
\t} 
\telse if (fp2 == NULL) 
\t{
\t\tprintf("Cannot open %s for reading ", fname2);
\t\texit(1);
\t} 
\telse 
\t{
\t\tch1 = getc(fp1);
\t\tch2 = getc(fp2);

\t\twhile ((ch1 != EOF) && (ch2 != EOF) && (ch1 == ch2)) 
\t\t{
\t\t\tch1 = getc(fp1);
\t\t\tch2 = getc(fp2);
\t\t}

\t\tif (ch1 == ch2)
\t\t\tprintf("Files are identical\\n");
\t\telse
\t\t\tprintf("Files are Not identical\\n");

\t\tfclose(fp1);
\t\tfclose(fp2);
\t}
\treturn 0;
}`,
    output: `[rsp@localhost File]$ ./a.out
Enter name of first file : 1.c
Enter name of second file: 1.c
Files are identical
[rsp@localhost File]$ ./a.out
Enter name of first file : 1.c
Enter name of second file: 2.c
Files are Not identical`
  },
  {
    id: "file-e",
    category: "File Handling",
    title: "Concatenate & Merge Files",
    description: "Menu driven: Concatenate two files into third, merge files, exit",
    code: `#include <stdio.h>
#include <stdlib.h>

int main()
{
\tFILE *fp1, *fp2, *fp3;
\tchar c;
\tchar fname1[40], fname2[40], fname3[40];
\tint ch;

\tprintf("Enter name of first file : ");
\tgets(fname1);
\tprintf("Enter name of second file: ");
\tgets(fname2);
\tprintf("Enter name of third file : ");
\tgets(fname3);

\tfor(;;)
\t{
\t\tprintf("\\n\\n** FILE OPERATION **\\n\\n");
\t\tprintf("1. Concatenate two files into third\\n");
\t\tprintf("2. Merge the files\\n");
\t\tprintf("3. Exit\\n");
\t\tprintf("\\nEnter your choice: ");
\t\tscanf("%d", &ch);

\t\tswitch(ch)
\t\t{
\t\t\tcase 1:
\t\t\t\tfp1 = fopen(fname1, "r");
\t\t\t\tfp2 = fopen(fname2, "r");
\t\t\t\tfp3 = fopen(fname3, "a");
\t\t\t\tif (fp1 == NULL || fp2 == NULL || fp3 == NULL)
\t\t\t\t{
\t\t\t\t\tputs("Could not open file");
\t\t\t\t\texit(0);
\t\t\t\t}
\t\t\t\twhile ((c = fgetc(fp1)) != EOF)
\t\t\t\t\tfputc(c, fp3);
\t\t\t\twhile ((c = fgetc(fp2)) != EOF)
\t\t\t\t\tfputc(c, fp3);
\t\t\t\tprintf("Concatenated file1 and file2 into file3");
\t\t\t\tfclose(fp1); fclose(fp2); fclose(fp3);
\t\t\t\tbreak;
\t\t\tcase 2:
\t\t\t\tfp1 = fopen(fname1, "r");
\t\t\t\tfp2 = fopen(fname2, "a");
\t\t\t\tif (fp1 == NULL || fp2 == NULL)
\t\t\t\t{
\t\t\t\t\tputs("Could not open file");
\t\t\t\t\texit(0);
\t\t\t\t}
\t\t\t\twhile ((c = fgetc(fp1)) != EOF)
\t\t\t\t\tfputc(c, fp2);
\t\t\t\tprintf("Merged file1 into file2");
\t\t\t\tfclose(fp1); fclose(fp2);
\t\t\t\tbreak;
\t\t\tcase 3:
\t\t\t\texit(0);
\t\t}
\t}
\treturn 0;
}`,
    output: `Enter name of first file : file1.txt
Enter name of second file: file2.txt
Enter name of third file : file3.txt

** FILE OPERATION **
1. Concatenate two files into third
2. Merge the files
3. Exit
Enter your choice: 1
Concatenated file1 and file2 into file3

Enter your choice: 2
Merged file1 into file2

Enter your choice: 3`
  },
  {
    id: "pre-a",
    category: "Preprocessor",
    title: "Area & Perimeter using Macro",
    description: "Find area and perimeter of circle using macro PI",
    code: `#include <stdio.h>

#define PI 3.14f

int main()
{
\tfloat rad, area, perm;

\tprintf("Enter radius of circle: ");
\tscanf("%f", &rad);

\tarea = PI * rad * rad;
\tperm = 2 * PI * rad;

\tprintf("Area of circle: %f\\n", area);
\tprintf("Perimeter of circle: %f\\n", perm);
\treturn 0;
}`,
    output: `[localhost]$ ./a.out
Enter radius of circle: 2.3
Area of circle: 16.610600
Perimeter of circle: 14.444000`
  },
  {
    id: "pre-b",
    category: "Preprocessor",
    title: "MIN Macro",
    description: "Define a macro MIN to find minimum of two numbers",
    code: `#include <stdio.h>

#define MIN(x,y) ((x<y)?x:y)

int main()
{
\tint a, b, min;

\tprintf("Enter first number: ");
\tscanf("%d", &a);
\tprintf("Enter second number: ");
\tscanf("%d", &b);

\tmin = MIN(a, b);
\tprintf("Minimum number is: %d\\n", min);

\treturn 0;
}`,
    output: `[localhost]$ ./a.out
Enter first number: 12
Enter second number: 13
Minimum number is: 12`
  }
];

export const categories = [...new Set(programs.map(p => p.category))];
