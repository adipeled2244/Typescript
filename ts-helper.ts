
// union type
let myAge: number | string = 27;
myAge = '27';
console.log(myAge);

// object type
let userData: { name: string; age: number } ;
userData= {
  name: 'Max',
  age: 27,
};

userData.age=3;


// array type
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];
// hobbies = [100]; // error to assign number to string array

// functions type
function add(a: number, b: number): number { // can put void
  return a + b;
}
function addvoid(a: number, b: number): void { // can put void
    console.log( a + b);
  }
  

  function calculate(a: number, b: number,  calcFn: (a: number, b: number) => number) {
    const result = a + b;
    calcFn(2,result);
  }


  // custom types

    type User = { name: string; age: number };
    const u1: User = { name: 'Max', age: 30 }; // this is a custom type

    type AddFn= (a: number, b: number) => number;
    let addFn: AddFn;
    addFn = (n1: number, n2: number) => {
      return n1 + n2;
    };

    function calculate2(a: number, b: number,  calcFn: AddFn) {
        const result = a + b;
        calcFn(2,result);
      }

      // option 2 to define type : interface

        interface User2 {
            name: string;
            age: number;
        }

        const u2: User2 = { name: 'Max', age: 30 };

        // custom type vs interface

       interface Credentials {
        email: string;
        password: string;
       }

       class User3 implements Credentials { /// צריך לפחות את מה שהוגדר באינטרפייס ואפשר עוד
        email: string;
        password: string;
       }


       // merge type

       type Admin = {
        name: string;
        }
        
        type AppUser = {
            perm: [string];
            }

        type AppAdmin= Admin & AppUser; // merge type

        let admin : AppAdmin = {
            name: 'Max',
            perm: ['all']
        }

        // literal type : לאפשר רק כמה ערכים ספציפים

        let role: 'admin' | 'user'; // only Max or d is allowed
        role = 'user';
        // myName = 'Manu'; // error


        // type guard

        type Role = 'admin' | 'user'; // only Max or d is allowed

        function performAction(role: Role) {
            if (role === 'admin') {
                console.log('is admin');
            } else {
                console.log('is not admin');
            }
        }


            // not work

            // function login(u: User | Admin) {
            //     if (typeof u === User) {   //  because the User type does not exist once the code is compiled to JavaScript:
            //       // do something
            //     }
            //   }

            // work
            // function login(u: User | Admin) {
            //     if ('permissions' in u) {
            //       // do something
            //     }

            // }

            // generic type

            type DataStorage<T> = {
                storage: T[];
                addItem(item: T): void;
                removeItem(item: T): void;
                getItem(): T[];

            }

            const textStorage: DataStorage<string> = {
                storage: ['hi'],
                addItem(item) {
                    this.storage.push(item);
                },
                removeItem(item) {
                    this.storage.splice(this.storage.indexOf(item), 1);
                },
                getItem() {
                    return [...this.storage];
                },
            };

            // generic funtion - כאשר פונקציה צריכה להיות גנרית לטייפים שונים
            function merge<T, U>(a: T, b: U) {
                return {
                    ...a,
                    ...b
                }
            }

            const user= merge<{name:string},{age:number}> ({name: 'Max'}, {age: 30});
            console.log(user);