export type DepartmentType = 
    "engineering" | 
    "sales" | 
    "sales support";

export type Role =
    "team-lead" |
    "project-engineer" |
    "designer" | 
    "area-manager";

export interface UserInfo {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly department: DepartmentType;
    readonly roles: Role[];
}

export type User = UserInfo;