const mapDrugsToEntity = (drugs: string): Array<string> => {
    return drugs ? drugs.split(',') : [] as string[];
}

export default mapDrugsToEntity;