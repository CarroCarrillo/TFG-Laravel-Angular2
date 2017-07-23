export class User {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  profile_image: string;
  created_at: Date;
  update_at: Date;
  password: string;

  fromData(user: User){
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.name = user.name;
    this.surname = user.surname;
    this.profile_image = user.profile_image;
    this.created_at = user.created_at;
    this.update_at = user.update_at;
    if(user.password) this.password = user.password;
  }
}