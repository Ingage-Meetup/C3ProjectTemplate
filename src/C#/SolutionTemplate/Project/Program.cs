using System;

namespace Project
{
    class Program
    {
        static void Main(string[] args)
        {

            for (var index = 0; index < 10; index++)
            {
                var game = new Game();
                var player = new AutomaticPlayer();
                var choice = player.ChooseDoor();

                Console.WriteLine($"Doors[0] {game.Doors[0].IsCar}");
                Console.WriteLine($"Doors[1] {game.Doors[1].IsCar}");
                Console.WriteLine($"Doors[2] {game.Doors[2].IsCar}");
                Console.WriteLine($"Choice {choice}");

                var showGoatDoor = game.ShowUnchosenGoat(choice);

                Console.WriteLine($"Goat Behind Door {showGoatDoor}");

                if (!player.Stay)
                {
                    // Change choice to not current and not revealed goat
                    choice = SwitchChoice(game, choice, showGoatDoor);
                }


                if (game.Doors[choice].IsCar)
                {
                    Console.WriteLine("Win");
                }
                else
                {
                    Console.WriteLine("Loss");
                }
            }
        }

        private static int SwitchChoice(Game game, int choice, int showGoatDoor)
        {
            for (var index = 0; index < game.Doors.Count; index++)
            {
                if (choice != index && showGoatDoor != index)
                {
                    return index;
                }
            }

            throw new Exception("Can't switch source");
        }
    }
}
