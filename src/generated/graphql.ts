import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    DateTime: any;
    Hex: any;
    Json: any;
    Long: any;
    RGBAHue: any;
    RGBATransparency: any;
    RichTextAST: any;
};

export type Aggregate = {
    count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Asset>;
    /** The file name */
    fileName: Scalars['String'];
    /** The file handle */
    handle: Scalars['String'];
    /** The height of the file */
    height?: Maybe<Scalars['Float']>;
    /** List of Asset versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Asset>;
    /** The mime type of the file */
    mimeType?: Maybe<Scalars['String']>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** The file size */
    size?: Maybe<Scalars['Float']>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars['String'];
    /** The file width */
    width?: Maybe<Scalars['Float']>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
    includeCurrent?: Scalars['Boolean'];
    locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
    transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<AssetEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type AssetCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    fileName: Scalars['String'];
    handle: Scalars['String'];
    height?: InputMaybe<Scalars['Float']>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<AssetCreateLocalizationsInput>;
    mimeType?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Float']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    fileName: Scalars['String'];
    handle: Scalars['String'];
    height?: InputMaybe<Scalars['Float']>;
    mimeType?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Float']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
    /** Localization input */
    data: AssetCreateLocalizationDataInput;
    locale: Locale;
};

export type AssetCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Create and connect multiple existing Asset documents */
    create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
    /** Connect one existing Asset document */
    connect?: InputMaybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<AssetWhereStageInput>;
    documentInStages_none?: InputMaybe<AssetWhereStageInput>;
    documentInStages_some?: InputMaybe<AssetWhereStageInput>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    FileNameAsc = 'fileName_ASC',
    FileNameDesc = 'fileName_DESC',
    HandleAsc = 'handle_ASC',
    HandleDesc = 'handle_DESC',
    HeightAsc = 'height_ASC',
    HeightDesc = 'height_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    MimeTypeAsc = 'mimeType_ASC',
    MimeTypeDesc = 'mimeType_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    SizeAsc = 'size_ASC',
    SizeDesc = 'size_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
    WidthAsc = 'width_ASC',
    WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
    document?: InputMaybe<DocumentTransformationInput>;
    image?: InputMaybe<ImageTransformationInput>;
    /** Pass true if you want to validate the passed transformation parameters */
    validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
    fileName?: InputMaybe<Scalars['String']>;
    handle?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Float']>;
    /** Manage document localizations */
    localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
    mimeType?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Float']>;
    width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
    fileName?: InputMaybe<Scalars['String']>;
    handle?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Float']>;
    mimeType?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Float']>;
    width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
    data: AssetUpdateLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: InputMaybe<Array<AssetConnectInput>>;
    /** Create and connect multiple Asset documents */
    create?: InputMaybe<Array<AssetCreateInput>>;
    /** Delete multiple Asset documents */
    delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Disconnect multiple Asset documents */
    disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Asset documents */
    set?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Update multiple Asset documents */
    update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Asset documents */
    upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
    fileName?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Float']>;
    /** Optional updates to localizations */
    localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
    mimeType?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Float']>;
    width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
    fileName?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Float']>;
    mimeType?: InputMaybe<Scalars['String']>;
    size?: InputMaybe<Scalars['Float']>;
    width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
    data: AssetUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: AssetUpdateManyInput;
    /** Document search */
    where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
    /** Connect existing Asset document */
    connect?: InputMaybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: InputMaybe<AssetCreateInput>;
    /** Delete currently connected Asset document */
    delete?: InputMaybe<Scalars['Boolean']>;
    /** Disconnect currently connected Asset document */
    disconnect?: InputMaybe<Scalars['Boolean']>;
    /** Update single Asset document */
    update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Asset document */
    upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: AssetUpdateInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
    /** Create document if it didn't exist */
    create: AssetCreateInput;
    /** Update document if it exists */
    update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
    create: AssetCreateLocalizationDataInput;
    locale: Locale;
    update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: AssetUpsertInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<AssetWhereStageInput>;
    documentInStages_none?: InputMaybe<AssetWhereStageInput>;
    documentInStages_some?: InputMaybe<AssetWhereStageInput>;
    fileName?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    fileName_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    fileName_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    fileName_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    fileName_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    fileName_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    fileName_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    fileName_starts_with?: InputMaybe<Scalars['String']>;
    handle?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    handle_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    handle_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    handle_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    handle_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    handle_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    handle_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    handle_starts_with?: InputMaybe<Scalars['String']>;
    height?: InputMaybe<Scalars['Float']>;
    /** All values greater than the given value. */
    height_gt?: InputMaybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    height_gte?: InputMaybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    /** All values less than the given value. */
    height_lt?: InputMaybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    height_lte?: InputMaybe<Scalars['Float']>;
    /** Any other value that exists and is not equal to the given value. */
    height_not?: InputMaybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    mimeType?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    mimeType_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    mimeType_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    mimeType_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    mimeType_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    mimeType_starts_with?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    size?: InputMaybe<Scalars['Float']>;
    /** All values greater than the given value. */
    size_gt?: InputMaybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    size_gte?: InputMaybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    /** All values less than the given value. */
    size_lt?: InputMaybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    size_lte?: InputMaybe<Scalars['Float']>;
    /** Any other value that exists and is not equal to the given value. */
    size_not?: InputMaybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
    width?: InputMaybe<Scalars['Float']>;
    /** All values greater than the given value. */
    width_gt?: InputMaybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    width_gte?: InputMaybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
    /** All values less than the given value. */
    width_lt?: InputMaybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    width_lte?: InputMaybe<Scalars['Float']>;
    /** Any other value that exists and is not equal to the given value. */
    width_not?: InputMaybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
    /** The number of nodes that have been affected by the Batch operation. */
    count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
    css: Scalars['String'];
    hex: Scalars['Hex'];
    rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
    hex?: InputMaybe<Scalars['Hex']>;
    rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
    /** Connect document after specified document */
    after?: InputMaybe<Scalars['ID']>;
    /** Connect document before specified document */
    before?: InputMaybe<Scalars['ID']>;
    /** Connect document at last position */
    end?: InputMaybe<Scalars['Boolean']>;
    /** Connect document at first position */
    start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
    Doc = 'doc',
    Docx = 'docx',
    Html = 'html',
    Jpg = 'jpg',
    Odp = 'odp',
    Ods = 'ods',
    Odt = 'odt',
    Pdf = 'pdf',
    Png = 'png',
    Ppt = 'ppt',
    Pptx = 'pptx',
    Svg = 'svg',
    Txt = 'txt',
    Webp = 'webp',
    Xls = 'xls',
    Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
    /**
     * Transforms a document into a desired file type.
     * See this matrix for format support:
     *
     * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
     * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
     * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
     * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
     * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
     * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
     * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
     * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
     * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
     * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
     * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
     * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * SVG:	jpg, odp, ods, odt, pdf, png, and webp
     * HTML:	jpg, odt, pdf, svg, txt, and webp
     * TXT:	jpg, html, odt, pdf, svg, and webp
     */
    format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
    /** Changes the output for the file. */
    output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
    createdAt: Scalars['DateTime'];
    data?: Maybe<Scalars['Json']>;
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export type Experience = Node & {
    company: Scalars['String'];
    companyUrl: Scalars['String'];
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Experience>;
    endAt: Scalars['String'];
    /** List of Experience versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    startAt: Scalars['String'];
    tasks: Array<Scalars['String']>;
    title: Scalars['String'];
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type ExperienceCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ExperienceDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

export type ExperienceHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: InputMaybe<Stage>;
};

export type ExperiencePublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ExperienceScheduledInArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ExperienceUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ExperienceConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ExperienceWhereUniqueInput;
};

/** A connection to a list of items. */
export type ExperienceConnection = {
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ExperienceEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ExperienceCreateInput = {
    company: Scalars['String'];
    companyUrl: Scalars['String'];
    createdAt?: InputMaybe<Scalars['DateTime']>;
    endAt: Scalars['String'];
    startAt: Scalars['String'];
    tasks?: InputMaybe<Array<Scalars['String']>>;
    title: Scalars['String'];
    updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ExperienceCreateManyInlineInput = {
    /** Connect multiple existing Experience documents */
    connect?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
    /** Create and connect multiple existing Experience documents */
    create?: InputMaybe<Array<ExperienceCreateInput>>;
};

export type ExperienceCreateOneInlineInput = {
    /** Connect one existing Experience document */
    connect?: InputMaybe<ExperienceWhereUniqueInput>;
    /** Create and connect one Experience document */
    create?: InputMaybe<ExperienceCreateInput>;
};

/** An edge in a connection. */
export type ExperienceEdge = {
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Experience;
};

/** Identifies documents */
export type ExperienceManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ExperienceWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ExperienceWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ExperienceWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    companyUrl?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    companyUrl_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    companyUrl_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    companyUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    companyUrl_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    companyUrl_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    companyUrl_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    companyUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    companyUrl_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    companyUrl_starts_with?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    company_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    company_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    company_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    company_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    company_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    company_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    company_starts_with?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<ExperienceWhereStageInput>;
    documentInStages_none?: InputMaybe<ExperienceWhereStageInput>;
    documentInStages_some?: InputMaybe<ExperienceWhereStageInput>;
    endAt?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    endAt_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    endAt_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    endAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    endAt_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    endAt_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    endAt_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    endAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    endAt_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    endAt_starts_with?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    startAt?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    startAt_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    startAt_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    startAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    startAt_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    startAt_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    startAt_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    startAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    startAt_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    startAt_starts_with?: InputMaybe<Scalars['String']>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    tasks?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    tasks_contains_all?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    tasks_contains_none?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    tasks_contains_some?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    tasks_not?: InputMaybe<Array<Scalars['String']>>;
    title?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ExperienceOrderByInput {
    CompanyUrlAsc = 'companyUrl_ASC',
    CompanyUrlDesc = 'companyUrl_DESC',
    CompanyAsc = 'company_ASC',
    CompanyDesc = 'company_DESC',
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    EndAtAsc = 'endAt_ASC',
    EndAtDesc = 'endAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    StartAtAsc = 'startAt_ASC',
    StartAtDesc = 'startAt_DESC',
    TasksAsc = 'tasks_ASC',
    TasksDesc = 'tasks_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

export type ExperienceUpdateInput = {
    company?: InputMaybe<Scalars['String']>;
    companyUrl?: InputMaybe<Scalars['String']>;
    endAt?: InputMaybe<Scalars['String']>;
    startAt?: InputMaybe<Scalars['String']>;
    tasks?: InputMaybe<Array<Scalars['String']>>;
    title?: InputMaybe<Scalars['String']>;
};

export type ExperienceUpdateManyInlineInput = {
    /** Connect multiple existing Experience documents */
    connect?: InputMaybe<Array<ExperienceConnectInput>>;
    /** Create and connect multiple Experience documents */
    create?: InputMaybe<Array<ExperienceCreateInput>>;
    /** Delete multiple Experience documents */
    delete?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
    /** Disconnect multiple Experience documents */
    disconnect?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Experience documents */
    set?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
    /** Update multiple Experience documents */
    update?: InputMaybe<Array<ExperienceUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Experience documents */
    upsert?: InputMaybe<Array<ExperienceUpsertWithNestedWhereUniqueInput>>;
};

export type ExperienceUpdateManyInput = {
    company?: InputMaybe<Scalars['String']>;
    companyUrl?: InputMaybe<Scalars['String']>;
    endAt?: InputMaybe<Scalars['String']>;
    startAt?: InputMaybe<Scalars['String']>;
    tasks?: InputMaybe<Array<Scalars['String']>>;
    title?: InputMaybe<Scalars['String']>;
};

export type ExperienceUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ExperienceUpdateManyInput;
    /** Document search */
    where: ExperienceWhereInput;
};

export type ExperienceUpdateOneInlineInput = {
    /** Connect existing Experience document */
    connect?: InputMaybe<ExperienceWhereUniqueInput>;
    /** Create and connect one Experience document */
    create?: InputMaybe<ExperienceCreateInput>;
    /** Delete currently connected Experience document */
    delete?: InputMaybe<Scalars['Boolean']>;
    /** Disconnect currently connected Experience document */
    disconnect?: InputMaybe<Scalars['Boolean']>;
    /** Update single Experience document */
    update?: InputMaybe<ExperienceUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Experience document */
    upsert?: InputMaybe<ExperienceUpsertWithNestedWhereUniqueInput>;
};

export type ExperienceUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ExperienceUpdateInput;
    /** Unique document search */
    where: ExperienceWhereUniqueInput;
};

export type ExperienceUpsertInput = {
    /** Create document if it didn't exist */
    create: ExperienceCreateInput;
    /** Update document if it exists */
    update: ExperienceUpdateInput;
};

export type ExperienceUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ExperienceUpsertInput;
    /** Unique document search */
    where: ExperienceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ExperienceWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ExperienceWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ExperienceWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ExperienceWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ExperienceWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    companyUrl?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    companyUrl_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    companyUrl_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    companyUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    companyUrl_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    companyUrl_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    companyUrl_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    companyUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    companyUrl_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    companyUrl_starts_with?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    company_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    company_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    company_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    company_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    company_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    company_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    company_starts_with?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    documentInStages_every?: InputMaybe<ExperienceWhereStageInput>;
    documentInStages_none?: InputMaybe<ExperienceWhereStageInput>;
    documentInStages_some?: InputMaybe<ExperienceWhereStageInput>;
    endAt?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    endAt_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    endAt_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    endAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    endAt_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    endAt_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    endAt_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    endAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    endAt_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    endAt_starts_with?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    startAt?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    startAt_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    startAt_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    startAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    startAt_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    startAt_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    startAt_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    startAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    startAt_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    startAt_starts_with?: InputMaybe<Scalars['String']>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    tasks?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    tasks_contains_all?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    tasks_contains_none?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    tasks_contains_some?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    tasks_not?: InputMaybe<Array<Scalars['String']>>;
    title?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ExperienceWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ExperienceWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ExperienceWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ExperienceWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<ExperienceWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References Experience record uniquely */
export type ExperienceWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
    /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
    Clip = 'clip',
    /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
    Crop = 'crop',
    /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
    Max = 'max',
    /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
    Scale = 'scale',
}

export type ImageResizeInput = {
    /** The default value for the fit parameter is fit:clip. */
    fit?: InputMaybe<ImageFit>;
    /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    height?: InputMaybe<Scalars['Int']>;
    /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
    /** Resizes the image */
    resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
    /** System locale */
    En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
    distance: Scalars['Float'];
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
    from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
};

export type Mutation = {
    /**
     * Create one asset
     * @deprecated Asset mutations will be overhauled soon
     */
    createAsset?: Maybe<Asset>;
    /** Create one experience */
    createExperience?: Maybe<Experience>;
    /** Create one project */
    createProject?: Maybe<Project>;
    /** Create one scheduledRelease */
    createScheduledRelease?: Maybe<ScheduledRelease>;
    /** Delete one asset from _all_ existing stages. Returns deleted document. */
    deleteAsset?: Maybe<Asset>;
    /** Delete one experience from _all_ existing stages. Returns deleted document. */
    deleteExperience?: Maybe<Experience>;
    /**
     * Delete many Asset documents
     * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
     */
    deleteManyAssets: BatchPayload;
    /** Delete many Asset documents, return deleted documents */
    deleteManyAssetsConnection: AssetConnection;
    /**
     * Delete many Experience documents
     * @deprecated Please use the new paginated many mutation (deleteManyExperiencesConnection)
     */
    deleteManyExperiences: BatchPayload;
    /** Delete many Experience documents, return deleted documents */
    deleteManyExperiencesConnection: ExperienceConnection;
    /**
     * Delete many Project documents
     * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
     */
    deleteManyProjects: BatchPayload;
    /** Delete many Project documents, return deleted documents */
    deleteManyProjectsConnection: ProjectConnection;
    /** Delete one project from _all_ existing stages. Returns deleted document. */
    deleteProject?: Maybe<Project>;
    /** Delete and return scheduled operation */
    deleteScheduledOperation?: Maybe<ScheduledOperation>;
    /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
    deleteScheduledRelease?: Maybe<ScheduledRelease>;
    /** Publish one asset */
    publishAsset?: Maybe<Asset>;
    /** Publish one experience */
    publishExperience?: Maybe<Experience>;
    /**
     * Publish many Asset documents
     * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
     */
    publishManyAssets: BatchPayload;
    /** Publish many Asset documents */
    publishManyAssetsConnection: AssetConnection;
    /**
     * Publish many Experience documents
     * @deprecated Please use the new paginated many mutation (publishManyExperiencesConnection)
     */
    publishManyExperiences: BatchPayload;
    /** Publish many Experience documents */
    publishManyExperiencesConnection: ExperienceConnection;
    /**
     * Publish many Project documents
     * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
     */
    publishManyProjects: BatchPayload;
    /** Publish many Project documents */
    publishManyProjectsConnection: ProjectConnection;
    /** Publish one project */
    publishProject?: Maybe<Project>;
    /** Schedule to publish one asset */
    schedulePublishAsset?: Maybe<Asset>;
    /** Schedule to publish one experience */
    schedulePublishExperience?: Maybe<Experience>;
    /** Schedule to publish one project */
    schedulePublishProject?: Maybe<Project>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAsset?: Maybe<Asset>;
    /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishExperience?: Maybe<Experience>;
    /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishProject?: Maybe<Project>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAsset?: Maybe<Asset>;
    /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishExperience?: Maybe<Experience>;
    /**
     * Unpublish many Asset documents
     * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
     */
    unpublishManyAssets: BatchPayload;
    /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAssetsConnection: AssetConnection;
    /**
     * Unpublish many Experience documents
     * @deprecated Please use the new paginated many mutation (unpublishManyExperiencesConnection)
     */
    unpublishManyExperiences: BatchPayload;
    /** Find many Experience documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyExperiencesConnection: ExperienceConnection;
    /**
     * Unpublish many Project documents
     * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
     */
    unpublishManyProjects: BatchPayload;
    /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyProjectsConnection: ProjectConnection;
    /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishProject?: Maybe<Project>;
    /** Update one asset */
    updateAsset?: Maybe<Asset>;
    /** Update one experience */
    updateExperience?: Maybe<Experience>;
    /**
     * Update many assets
     * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
     */
    updateManyAssets: BatchPayload;
    /** Update many Asset documents */
    updateManyAssetsConnection: AssetConnection;
    /**
     * Update many experiences
     * @deprecated Please use the new paginated many mutation (updateManyExperiencesConnection)
     */
    updateManyExperiences: BatchPayload;
    /** Update many Experience documents */
    updateManyExperiencesConnection: ExperienceConnection;
    /**
     * Update many projects
     * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
     */
    updateManyProjects: BatchPayload;
    /** Update many Project documents */
    updateManyProjectsConnection: ProjectConnection;
    /** Update one project */
    updateProject?: Maybe<Project>;
    /** Update one scheduledRelease */
    updateScheduledRelease?: Maybe<ScheduledRelease>;
    /** Upsert one asset */
    upsertAsset?: Maybe<Asset>;
    /** Upsert one experience */
    upsertExperience?: Maybe<Experience>;
    /** Upsert one project */
    upsertProject?: Maybe<Project>;
};

export type MutationCreateAssetArgs = {
    data: AssetCreateInput;
};

export type MutationCreateExperienceArgs = {
    data: ExperienceCreateInput;
};

export type MutationCreateProjectArgs = {
    data: ProjectCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
    data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAssetArgs = {
    where: AssetWhereUniqueInput;
};

export type MutationDeleteExperienceArgs = {
    where: ExperienceWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyExperiencesArgs = {
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationDeleteManyExperiencesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationDeleteManyProjectsArgs = {
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyProjectsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationDeleteProjectArgs = {
    where: ProjectWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
    where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishExperienceArgs = {
    to?: Array<Stage>;
    where: ExperienceWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']>;
    to?: Array<Stage>;
    where?: InputMaybe<AssetManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']>;
    skip?: InputMaybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: InputMaybe<AssetManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyExperiencesArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationPublishManyExperiencesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationPublishManyProjectsArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationPublishManyProjectsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationPublishProjectArgs = {
    to?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars['Boolean']>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    releaseId?: InputMaybe<Scalars['String']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishExperienceArgs = {
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    releaseId?: InputMaybe<Scalars['String']>;
    to?: Array<Stage>;
    where: ExperienceWhereUniqueInput;
};

export type MutationSchedulePublishProjectArgs = {
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    releaseId?: InputMaybe<Scalars['String']>;
    to?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    releaseId?: InputMaybe<Scalars['String']>;
    unpublishBase?: InputMaybe<Scalars['Boolean']>;
    where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishExperienceArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    releaseId?: InputMaybe<Scalars['String']>;
    where: ExperienceWhereUniqueInput;
};

export type MutationScheduleUnpublishProjectArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    releaseId?: InputMaybe<Scalars['String']>;
    where: ProjectWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars['Boolean']>;
    where: AssetWhereUniqueInput;
};

export type MutationUnpublishExperienceArgs = {
    from?: Array<Stage>;
    where: ExperienceWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars['Boolean']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars['Boolean']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyExperiencesArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationUnpublishManyExperiencesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationUnpublishManyProjectsArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyProjectsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUnpublishProjectArgs = {
    from?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
    data: AssetUpdateInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpdateExperienceArgs = {
    data: ExperienceUpdateInput;
    where: ExperienceWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
    data: AssetUpdateManyInput;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    data: AssetUpdateManyInput;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyExperiencesArgs = {
    data: ExperienceUpdateManyInput;
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationUpdateManyExperiencesConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    data: ExperienceUpdateManyInput;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ExperienceManyWhereInput>;
};

export type MutationUpdateManyProjectsArgs = {
    data: ProjectUpdateManyInput;
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyProjectsConnectionArgs = {
    after?: InputMaybe<Scalars['ID']>;
    before?: InputMaybe<Scalars['ID']>;
    data: ProjectUpdateManyInput;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ProjectManyWhereInput>;
};

export type MutationUpdateProjectArgs = {
    data: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
    data: ScheduledReleaseUpdateInput;
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
    upsert: AssetUpsertInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpsertExperienceArgs = {
    upsert: ExperienceUpsertInput;
    where: ExperienceWhereUniqueInput;
};

export type MutationUpsertProjectArgs = {
    upsert: ProjectUpsertInput;
    where: ProjectWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
    /** The id of the object. */
    id: Scalars['ID'];
    /** The Stage of an object */
    stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** Number of items in the current page. */
    pageSize?: Maybe<Scalars['Int']>;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>;
};

export type Project = Node & {
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    description: Scalars['String'];
    /** Get the document in other stages */
    documentInStages: Array<Project>;
    /** List of Project versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    name: Scalars['String'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    skills: Array<Scalars['String']>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    url: Scalars['String'];
};

export type ProjectCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ProjectDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

export type ProjectHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: InputMaybe<Stage>;
};

export type ProjectPublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ProjectScheduledInArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProjectUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ProjectEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ProjectCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    description: Scalars['String'];
    name: Scalars['String'];
    skills: Array<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    url: Scalars['String'];
};

export type ProjectCreateManyInlineInput = {
    /** Connect multiple existing Project documents */
    connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
    /** Create and connect multiple existing Project documents */
    create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
    /** Connect one existing Project document */
    connect?: InputMaybe<ProjectWhereUniqueInput>;
    /** Create and connect one Project document */
    create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProjectWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProjectWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProjectWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']>;
    documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
    documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
    documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    skills?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    skills_contains_all?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    skills_contains_none?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    skills_contains_some?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    skills_not?: InputMaybe<Array<Scalars['String']>>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
    url?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ProjectOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    SkillsAsc = 'skills_ASC',
    SkillsDesc = 'skills_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export type ProjectUpdateInput = {
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    skills?: InputMaybe<Array<Scalars['String']>>;
    url?: InputMaybe<Scalars['String']>;
};

export type ProjectUpdateManyInlineInput = {
    /** Connect multiple existing Project documents */
    connect?: InputMaybe<Array<ProjectConnectInput>>;
    /** Create and connect multiple Project documents */
    create?: InputMaybe<Array<ProjectCreateInput>>;
    /** Delete multiple Project documents */
    delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
    /** Disconnect multiple Project documents */
    disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Project documents */
    set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
    /** Update multiple Project documents */
    update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Project documents */
    upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    skills?: InputMaybe<Array<Scalars['String']>>;
    url?: InputMaybe<Scalars['String']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ProjectUpdateManyInput;
    /** Document search */
    where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
    /** Connect existing Project document */
    connect?: InputMaybe<ProjectWhereUniqueInput>;
    /** Create and connect one Project document */
    create?: InputMaybe<ProjectCreateInput>;
    /** Delete currently connected Project document */
    delete?: InputMaybe<Scalars['Boolean']>;
    /** Disconnect currently connected Project document */
    disconnect?: InputMaybe<Scalars['Boolean']>;
    /** Update single Project document */
    update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Project document */
    upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ProjectUpdateInput;
    /** Unique document search */
    where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
    /** Create document if it didn't exist */
    create: ProjectCreateInput;
    /** Update document if it exists */
    update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ProjectUpsertInput;
    /** Unique document search */
    where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProjectWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProjectWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProjectWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProjectWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']>;
    documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
    documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
    documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    /** Matches if the field array contains *all* items provided to the filter and order does match */
    skills?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains *all* items provided to the filter */
    skills_contains_all?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contain any of the items provided to the filter */
    skills_contains_none?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array contains at least one item provided to the filter */
    skills_contains_some?: InputMaybe<Array<Scalars['String']>>;
    /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
    skills_not?: InputMaybe<Array<Scalars['String']>>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
    url?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    url_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    url_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    url_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    url_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    url_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    url_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    url_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProjectWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProjectWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
    /** Locales to publish */
    locale: Locale;
    /** Stages to publish selected locales to */
    stages: Array<Stage>;
};

export type Query = {
    /** Retrieve a single asset */
    asset?: Maybe<Asset>;
    /** Retrieve document version */
    assetVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple assets */
    assets: Array<Asset>;
    /** Retrieve multiple assets using the Relay connection interface */
    assetsConnection: AssetConnection;
    /** Retrieve a single experience */
    experience?: Maybe<Experience>;
    /** Retrieve document version */
    experienceVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple experiences */
    experiences: Array<Experience>;
    /** Retrieve multiple experiences using the Relay connection interface */
    experiencesConnection: ExperienceConnection;
    /** Fetches an object given its ID */
    node?: Maybe<Node>;
    /** Retrieve a single project */
    project?: Maybe<Project>;
    /** Retrieve document version */
    projectVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple projects */
    projects: Array<Project>;
    /** Retrieve multiple projects using the Relay connection interface */
    projectsConnection: ProjectConnection;
    /** Retrieve a single scheduledOperation */
    scheduledOperation?: Maybe<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations */
    scheduledOperations: Array<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations using the Relay connection interface */
    scheduledOperationsConnection: ScheduledOperationConnection;
    /** Retrieve a single scheduledRelease */
    scheduledRelease?: Maybe<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases */
    scheduledReleases: Array<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases using the Relay connection interface */
    scheduledReleasesConnection: ScheduledReleaseConnection;
    /** Retrieve a single user */
    user?: Maybe<User>;
    /** Retrieve multiple users */
    users: Array<User>;
    /** Retrieve multiple users using the Relay connection interface */
    usersConnection: UserConnection;
};

export type QueryAssetArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
    where: VersionWhereInput;
};

export type QueryAssetsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AssetOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AssetOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<AssetWhereInput>;
};

export type QueryExperienceArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ExperienceWhereUniqueInput;
};

export type QueryExperienceVersionArgs = {
    where: VersionWhereInput;
};

export type QueryExperiencesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ExperienceOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ExperienceWhereInput>;
};

export type QueryExperiencesConnectionArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ExperienceOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ExperienceWhereInput>;
};

export type QueryNodeArgs = {
    id: Scalars['ID'];
    locales?: Array<Locale>;
    stage?: Stage;
};

export type QueryProjectArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ProjectWhereUniqueInput;
};

export type QueryProjectVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProjectsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProjectOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ProjectWhereInput>;
};

export type QueryProjectsConnectionArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProjectOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ProjectWhereInput>;
};

export type QueryScheduledOperationArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<UserOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<UserOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    stage?: Stage;
    where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
    a: Scalars['RGBATransparency'];
    b: Scalars['RGBAHue'];
    g: Scalars['RGBAHue'];
    r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
    a: Scalars['RGBATransparency'];
    b: Scalars['RGBAHue'];
    g: Scalars['RGBAHue'];
    r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
    /** Returns HTMl representation */
    html: Scalars['String'];
    /** Returns Markdown representation */
    markdown: Scalars['String'];
    /** Returns AST representation */
    raw: Scalars['RichTextAST'];
    /** Returns plain-text contents of RichText */
    text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
    affectedDocuments: Array<ScheduledOperationAffectedDocument>;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Operation description */
    description?: Maybe<Scalars['String']>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>;
    /** Operation error message */
    errorMessage?: Maybe<Scalars['String']>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars['Json'];
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>;
    /** System stage field */
    stage: Stage;
    /** operation Status */
    status: ScheduledOperationStatus;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars['Int']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Experience | Project;

export type ScheduledOperationConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledOperationEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
    /** Connect one existing ScheduledOperation document */
    connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']>;
    errorMessage?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    /** All values containing the given json path. */
    rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
    /**
     * Recursively tries to find the provided JSON scalar value inside the field.
     * It does use an exact match when comparing values.
     * If you pass `null` as value the filter will be ignored.
     * Note: This filter fails if you try to look for a non scalar JSON value!
     */
    rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
    release?: InputMaybe<ScheduledReleaseWhereInput>;
    status?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    ErrorMessageAsc = 'errorMessage_ASC',
    ErrorMessageDesc = 'errorMessage_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    StatusAsc = 'status_ASC',
    StatusDesc = 'status_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
    Canceled = 'CANCELED',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
    /** Disconnect multiple ScheduledOperation documents */
    disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledOperation documents */
    set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
    /** Connect existing ScheduledOperation document */
    connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
    /** Disconnect currently connected ScheduledOperation document */
    disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']>;
    errorMessage?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    /** All values containing the given json path. */
    rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
    /**
     * Recursively tries to find the provided JSON scalar value inside the field.
     * It does use an exact match when comparing values.
     * If you pass `null` as value the filter will be ignored.
     * Note: This filter fails if you try to look for a non scalar JSON value!
     */
    rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
    release?: InputMaybe<ScheduledReleaseWhereInput>;
    status?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Release description */
    description?: Maybe<Scalars['String']>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>;
    /** Release error message */
    errorMessage?: Maybe<Scalars['String']>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** Whether scheduled release should be run */
    isActive: Scalars['Boolean'];
    /** Whether scheduled release is implicit */
    isImplicit: Scalars['Boolean'];
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Release date and time */
    releaseAt?: Maybe<Scalars['DateTime']>;
    /** System stage field */
    stage: Stage;
    /** Release Status */
    status: ScheduledReleaseStatus;
    /** Release Title */
    title?: Maybe<Scalars['String']>;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
    forceParentLocale?: InputMaybe<Scalars['Boolean']>;
    locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledReleaseEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    description?: InputMaybe<Scalars['String']>;
    errorMessage?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    title?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Create and connect multiple existing ScheduledRelease documents */
    create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
    /** Connect one existing ScheduledRelease document */
    connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']>;
    errorMessage?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']>;
    isImplicit?: InputMaybe<Scalars['Boolean']>;
    /** Any other value that exists and is not equal to the given value. */
    isImplicit_not?: InputMaybe<Scalars['Boolean']>;
    operations_every?: InputMaybe<ScheduledOperationWhereInput>;
    operations_none?: InputMaybe<ScheduledOperationWhereInput>;
    operations_some?: InputMaybe<ScheduledOperationWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    releaseAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    status?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    title?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    ErrorMessageAsc = 'errorMessage_ASC',
    ErrorMessageDesc = 'errorMessage_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    IsActiveAsc = 'isActive_ASC',
    IsActiveDesc = 'isActive_DESC',
    IsImplicitAsc = 'isImplicit_ASC',
    IsImplicitDesc = 'isImplicit_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    ReleaseAtAsc = 'releaseAt_ASC',
    ReleaseAtDesc = 'releaseAt_DESC',
    StatusAsc = 'status_ASC',
    StatusDesc = 'status_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
    description?: InputMaybe<Scalars['String']>;
    errorMessage?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
    /** Create and connect multiple ScheduledRelease documents */
    create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
    /** Delete multiple ScheduledRelease documents */
    delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Disconnect multiple ScheduledRelease documents */
    disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledRelease documents */
    set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Update multiple ScheduledRelease documents */
    update?: InputMaybe<
        Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
    >;
    /** Upsert multiple ScheduledRelease documents */
    upsert?: InputMaybe<
        Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
    >;
};

export type ScheduledReleaseUpdateManyInput = {
    description?: InputMaybe<Scalars['String']>;
    errorMessage?: InputMaybe<Scalars['String']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ScheduledReleaseUpdateManyInput;
    /** Document search */
    where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
    /** Connect existing ScheduledRelease document */
    connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: InputMaybe<ScheduledReleaseCreateInput>;
    /** Delete currently connected ScheduledRelease document */
    delete?: InputMaybe<Scalars['Boolean']>;
    /** Disconnect currently connected ScheduledRelease document */
    disconnect?: InputMaybe<Scalars['Boolean']>;
    /** Update single ScheduledRelease document */
    update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ScheduledRelease document */
    upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ScheduledReleaseUpdateInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
    /** Create document if it didn't exist */
    create: ScheduledReleaseCreateInput;
    /** Update document if it exists */
    update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ScheduledReleaseUpsertInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    description_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars['String']>;
    errorMessage?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    errorMessage_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']>;
    isImplicit?: InputMaybe<Scalars['Boolean']>;
    /** Any other value that exists and is not equal to the given value. */
    isImplicit_not?: InputMaybe<Scalars['Boolean']>;
    operations_every?: InputMaybe<ScheduledOperationWhereInput>;
    operations_none?: InputMaybe<ScheduledOperationWhereInput>;
    operations_some?: InputMaybe<ScheduledOperationWhereInput>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    releaseAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    releaseAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    status?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    /** Any other value that exists and is not equal to the given value. */
    status_not?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    title?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    title_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
    /** The Draft is the default stage for all your content. */
    Draft = 'DRAFT',
    /** The Published stage is where you can publish your content to. */
    Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
    Base = 'BASE',
    Combined = 'COMBINED',
    Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
    /** Locales to unpublish */
    locale: Locale;
    /** Stages to unpublish selected locales from */
    stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** Get the document in other stages */
    documentInStages: Array<User>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** Flag to determine if user is active or not */
    isActive: Scalars['Boolean'];
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind;
    /** The username */
    name: Scalars['String'];
    /** Profile Picture url */
    picture?: Maybe<Scalars['String']>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
};

/** User system model */
export type UserDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

export type UserConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<UserEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
    /** Connect one existing User document */
    connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: User;
};

/** System User Kind */
export enum UserKind {
    AppToken = 'APP_TOKEN',
    Member = 'MEMBER',
    Pat = 'PAT',
    Public = 'PUBLIC',
    Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    documentInStages_every?: InputMaybe<UserWhereStageInput>;
    documentInStages_none?: InputMaybe<UserWhereStageInput>;
    documentInStages_some?: InputMaybe<UserWhereStageInput>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']>;
    kind?: InputMaybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    /** Any other value that exists and is not equal to the given value. */
    kind_not?: InputMaybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    name?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']>;
    picture?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    picture_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    picture_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    picture_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    picture_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    picture_starts_with?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
    CreatedAtAsc = 'createdAt_ASC',
    CreatedAtDesc = 'createdAt_DESC',
    IdAsc = 'id_ASC',
    IdDesc = 'id_DESC',
    IsActiveAsc = 'isActive_ASC',
    IsActiveDesc = 'isActive_DESC',
    KindAsc = 'kind_ASC',
    KindDesc = 'kind_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    PictureAsc = 'picture_ASC',
    PictureDesc = 'picture_DESC',
    PublishedAtAsc = 'publishedAt_ASC',
    PublishedAtDesc = 'publishedAt_DESC',
    UpdatedAtAsc = 'updatedAt_ASC',
    UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: InputMaybe<Array<UserConnectInput>>;
    /** Disconnect multiple User documents */
    disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing User documents */
    set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
    /** Connect existing User document */
    connect?: InputMaybe<UserWhereUniqueInput>;
    /** Disconnect currently connected User document */
    disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
    /** This field can be used to request to check if the entry is outdated by internal comparison */
    outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    createdAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    documentInStages_every?: InputMaybe<UserWhereStageInput>;
    documentInStages_none?: InputMaybe<UserWhereStageInput>;
    documentInStages_some?: InputMaybe<UserWhereStageInput>;
    id?: InputMaybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Any other value that exists and is not equal to the given value. */
    id_not?: InputMaybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars['ID']>;
    isActive?: InputMaybe<Scalars['Boolean']>;
    /** Any other value that exists and is not equal to the given value. */
    isActive_not?: InputMaybe<Scalars['Boolean']>;
    kind?: InputMaybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    /** Any other value that exists and is not equal to the given value. */
    kind_not?: InputMaybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    name?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    name_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars['String']>;
    picture?: InputMaybe<Scalars['String']>;
    /** All values containing the given string. */
    picture_contains?: InputMaybe<Scalars['String']>;
    /** All values ending with the given string. */
    picture_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are contained in given list. */
    picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Any other value that exists and is not equal to the given value. */
    picture_not?: InputMaybe<Scalars['String']>;
    /** All values not containing the given string. */
    picture_not_contains?: InputMaybe<Scalars['String']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: InputMaybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: InputMaybe<Scalars['String']>;
    /** All values starting with the given string. */
    picture_starts_with?: InputMaybe<Scalars['String']>;
    publishedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    publishedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
    /** Any other value that exists and is not equal to the given value. */
    updatedAt_not?: InputMaybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereStageInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereStageInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereStageInput>>;
    /** This field contains fields which can be set as true or false to specify an internal comparison */
    compareWithParent?: InputMaybe<UserWhereComparatorInput>;
    /** Specify the stage to compare with */
    stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
    id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export type VersionWhereInput = {
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export enum _FilterKind {
    And = 'AND',
    Not = 'NOT',
    Or = 'OR',
    Contains = 'contains',
    ContainsAll = 'contains_all',
    ContainsNone = 'contains_none',
    ContainsSome = 'contains_some',
    EndsWith = 'ends_with',
    Eq = 'eq',
    EqNot = 'eq_not',
    Gt = 'gt',
    Gte = 'gte',
    In = 'in',
    JsonPathExists = 'json_path_exists',
    JsonValueRecursive = 'json_value_recursive',
    Lt = 'lt',
    Lte = 'lte',
    NotContains = 'not_contains',
    NotEndsWith = 'not_ends_with',
    NotIn = 'not_in',
    NotStartsWith = 'not_starts_with',
    RelationalEvery = 'relational_every',
    RelationalNone = 'relational_none',
    RelationalSingle = 'relational_single',
    RelationalSome = 'relational_some',
    Search = 'search',
    StartsWith = 'starts_with',
    UnionEmpty = 'union_empty',
    UnionEvery = 'union_every',
    UnionNone = 'union_none',
    UnionSingle = 'union_single',
    UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
    Enum = 'enum',
    Relation = 'relation',
    RichText = 'richText',
    RichTextWithEmbeds = 'richTextWithEmbeds',
    Scalar = 'scalar',
    Union = 'union',
    Virtual = 'virtual',
}

export enum _MutationKind {
    Create = 'create',
    Delete = 'delete',
    DeleteMany = 'deleteMany',
    Publish = 'publish',
    PublishMany = 'publishMany',
    SchedulePublish = 'schedulePublish',
    ScheduleUnpublish = 'scheduleUnpublish',
    Unpublish = 'unpublish',
    UnpublishMany = 'unpublishMany',
    Update = 'update',
    UpdateMany = 'updateMany',
    Upsert = 'upsert',
}

export enum _OrderDirection {
    Asc = 'asc',
    Desc = 'desc',
}

export enum _RelationInputCardinality {
    Many = 'many',
    One = 'one',
}

export enum _RelationInputKind {
    Create = 'create',
    Update = 'update',
}

export enum _RelationKind {
    Regular = 'regular',
    Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
    Base = 'base',
    Combined = 'combined',
    Localization = 'localization',
}

export type ExperiencesQueryVariables = Exact<{ [key: string]: never }>;

export type ExperiencesQuery = {
    experiences: Array<{
        title: string;
        company: string;
        companyUrl: string;
        startAt: string;
        endAt: string;
        tasks: Array<string>;
    }>;
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsQuery = {
    projects: Array<{
        name: string;
        description: string;
        url: string;
        skills: Array<string>;
    }>;
};

export const ExperiencesDocument = /*#__PURE__*/ gql`
    query experiences {
        experiences {
            title
            company
            companyUrl
            startAt
            endAt
            tasks
        }
    }
`;
export const ProjectsDocument = /*#__PURE__*/ gql`
    query projects {
        projects {
            name
            description
            url
            skills
        }
    }
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
    action,
    _operationName,
    _operationType
) => action();

export function getSdk(
    client: GraphQLClient,
    withWrapper: SdkFunctionWrapper = defaultWrapper
) {
    return {
        experiences(
            variables?: ExperiencesQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<ExperiencesQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<ExperiencesQuery>(
                        ExperiencesDocument,
                        variables,
                        { ...requestHeaders, ...wrappedRequestHeaders }
                    ),
                'experiences',
                'query'
            );
        },
        projects(
            variables?: ProjectsQueryVariables,
            requestHeaders?: Dom.RequestInit['headers']
        ): Promise<ProjectsQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<ProjectsQuery>(ProjectsDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'projects',
                'query'
            );
        },
    };
}
export type Sdk = ReturnType<typeof getSdk>;
