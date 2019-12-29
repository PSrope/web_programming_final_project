#include <stdio.h>
#include <stdlib.h>

int pitcher(int acc)
{
    int a,range;
    a=(rand()%100)+1; //x=1~100
    range=20+acc/10*8;

    if(a<=range)
    {
        return 1;
    }


    return 0;//out+1
}

int beater(int str)
{
    int b,range;
    b=(rand()%100)+1; //x=1~100
    range=10+str/10*9;

    if(b<=range)
    {
        return 1;
    }
    else if(b>range)
    {
        return 0;
    }


}

int hit(int str)
{
    int x,y;
    x=(rand()%100)+1; //x=1~100
    if(1<=x && x<=10 &&str>=70)
    {
        return 2;// homerun
    }
    else if(20<=x && x<=35 &&str>=50)
    {
        return 1;//2b
    }
    else if(35<=x && x<=70)
    {
        return 0;//1b
    }
    else
    {
        if(1<=x && x<=10)
        {
            y=(rand()%4)+3;//y=3~6
            return y;
        }
        else if(20<=x && x<=35)
        {
            y=(rand()%3)+7;//y=7~9
            return y;
        }
        else
        {
            y=(rand()%5)+10; //y=10~14
            return y;
        }
    }


}

int main()
{
    int acc,str,ball;
    while(1)
    {
        ball=-1;

    printf("str:");
    scanf("%d",&str);
    printf("acc:");
    scanf("%d",&acc);

    if(pitcher(acc)==1)
    {
        if(beater(str)==1)
        {
            ball= hit(str);

        }
        else
        {
            printf("strike!! out!!");
        }

    }
    else
    {
        printf("bad ball!!  bb!!");
    }

    if(ball!=-1)
    {
        if(ball==0)
        {

            printf("1b hit!!");
        }
        else if(ball==1)
        {
            printf("2b hit!!");
        }
        else if(ball==2)
        {
            printf("home run!!!");
        }
        else if(ball==3)
        {
            printf("cf fly!!");
        }
        else if(ball==4)
        {
            printf("Lf fly!!");
        }
        else if(ball==5)
        {
            printf("Rf fly!!");
        }
        else if(ball==6)
        {
            printf("3B fly!!");
        }
        else if(ball==7)
        {
            printf("2B roll!!");
        }
        else if(ball==8)
        {
            printf("sf roll!!");
        }
        else if(ball==9)
        {
            printf("ss roll!!");
        }
        else if(ball==10)
        {
            printf("p roll!!");
        }
        else if(ball==11)
        {
            printf("1b fly!!");
        }
        else if(ball==12)
        {
            printf("2b fly!!");
        }
        else if(ball==13)
        {
            printf("sf fly!!");
        }
        else if(ball==14)
        {
            printf("ss fly!!");
        }

    }
    }



    return 0;
}
