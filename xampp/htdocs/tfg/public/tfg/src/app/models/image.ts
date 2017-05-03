export class Image {
    contributor: string;
    coverage: string;
    created_at: Date;
    creator: string;
    date: Date;
    description: string;
    format: string;
    hashedName: string;
    id: number;
    identifier: string;
    language: string;
    publisher: string;
    relation: string;
    rights: string;
    source: string;
    subject: string;
    title: string;
    type: string;
    updated_at: Date;

    fromData(image: Image) {
        this.contributor = image.contributor;
        this.coverage = image.coverage;
        this.created_at = image.created_at;
        this.creator = image.creator;
        this.date = image.date;
        this.description = image.description;
        this.format = image.format;
        this.hashedName = image.hashedName;
        this.id = image.id;
        this.identifier = image.identifier;
        this.language = image.language;
        this.publisher = image.publisher;
        this.relation = image.relation;
        this.rights = image.rights;
        this.source = image.source;
        this.subject = image.subject;
        this.title = image.title;
        this.type = image.type;
        this.updated_at = image.updated_at;
    }
}