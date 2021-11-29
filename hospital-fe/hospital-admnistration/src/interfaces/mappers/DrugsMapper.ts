const mapDrugsToEntity = (drugs: string): Array<string> => {
    return drugs.split(',') || [] as string[];
}

export default mapDrugsToEntity;