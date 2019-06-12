export function addAvailabilty(isAvailable: boolean) {
    return function(target: any){
        return class {
            available = isAvailable;
        };
    }
}