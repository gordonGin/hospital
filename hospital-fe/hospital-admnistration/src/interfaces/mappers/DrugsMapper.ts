const mapDrugsToEntity = (drugs: string): string[] => {
    return drugs ? drugs.split(',') : [] as string[];
}

export default mapDrugsToEntity;