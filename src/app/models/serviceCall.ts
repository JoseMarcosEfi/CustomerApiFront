export interface ServiceCall {
    id?: any,
    idCustomer: any,
    idTechnician: any,
    priority: number,
    status: number,
    observations: string,
    title: string,
    value: number,
    closingDate: any,
    openingDate?: any,
    nameCustomer?: string,
    nameTechnician?: string
}