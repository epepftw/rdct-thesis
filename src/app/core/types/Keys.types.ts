
export type Keys = {
    advertiser: UserIdName,
    createdBy: UserIdName,
    dateCreated : string,
    isActive : boolean,
    isOnline : boolean,
    key : string,
    _id : string,
    assignedScreen?: string[]
}

type UserIdName = {
    id : string,
    name : string
}