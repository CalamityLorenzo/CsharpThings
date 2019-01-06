using System;

namespace csharpTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var x=7;
            if(x>5 && x< 10){
                Console.WriteLine("BEtween 5 and 10");
            }

            if(5<x && x < 10){
                Console.WriteLine("Idomatioca true");
            }
            Console.WriteLine("Hello World!");
        }
    }
}
