export const time_since = (timestamp) => {
    const hours = Math.floor((new Date().getTime() - timestamp.getTime()) / 3600000);
    if (hours < 1) {
        // If it has been less than an a minute, return "Just now"
        const minutes = Math.floor((new Date().getTime() - timestamp.getTime()) / 60000);
        if (minutes < 1) {
            return "Just now";
        }
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }
    // Hours, weeks, years
    if (hours < 24) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 7) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
    const weeks = Math.floor(days / 7);
    if (weeks < 52) {
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    }
    const years = Math.floor(weeks / 52);
    return `${years} year${years > 1 ? "s" : ""} ago`;
}