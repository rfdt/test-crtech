export function toLocaleTimeString(timeString: string | null | undefined ){
    return timeString ? new Date(timeString).toLocaleTimeString().split(':').splice(0,2).join(':') : "";
}