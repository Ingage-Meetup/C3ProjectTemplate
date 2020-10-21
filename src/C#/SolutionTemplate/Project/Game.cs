using System;
using System.Collections.Generic;

namespace Project
{
    public class Game
    {
        public List<Door> Doors { get; }

        public Game()
        {
            // Generate prize in one of three doors
            this.Doors = new List<Door>() {new Door(), new Door(), new Door()};

            var rand = new Random();
            var carIndex = rand.Next(0, 3);

            for (var current = 0; current < this.Doors.Count; current++)
            {
                if (current == carIndex)
                {
                    this.Doors[current].IsCar = true;
                }
                else
                {
                    this.Doors[current].IsCar = false;
                }
            }
        }

        public int ShowUnchosenGoat(int playersChoice)
        {
            for (var index = 0; index < this.Doors.Count; index++)
            {
                if ((index != playersChoice) && this.Doors[index].IsGoat)
                {
                    return index;
                }
            }

            throw new Exception("All Cars");
        }
    }

    public class Door
    {
        public bool IsCar { get; set; }

        public bool IsGoat
        {
            get { return this.IsCar == false; }
        }
    }

    public class AutomaticPlayer
    {
        public int ChooseDoor()
        {
            var rand = new Random();
            var choiceIndex = rand.Next(0, 3);
            return choiceIndex;
        }

        public bool Stay { get; set; }
    }
}
