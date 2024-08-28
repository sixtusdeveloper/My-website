// /types/index.d.ts
// declare interface CreateUserParams {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// declare interface User extends CreateUserParams {
//   $id: string;
// }






/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  
 