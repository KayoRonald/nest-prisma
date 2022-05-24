export type IListUser = {
  id: string;
  name: string;
  Courses: {
    name: string;
  };
};

export type UsersWhereUniqueInput = {
  id?: string;
  email?: string;
};

export type Users = {
  id: string;
  name: string;
  email: string;
  course?: string;
  coursesId: string | null;
  created_at: Date;
  update_at: Date;
};
