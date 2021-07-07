export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  ogpImageUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  /** Returns all children nodes filtered by type GRVSCCodeBlock */
  childrenGrvscCodeBlock?: Maybe<Array<Maybe<GrvscCodeBlock>>>;
  /** Returns the first child node of type GRVSCCodeBlock or null if there are no children of given type on this node */
  childGrvscCodeBlock?: Maybe<GrvscCodeBlock>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  grvscCodeBlocks?: Maybe<Array<Maybe<GrvscCodeBlock>>>;
  grvscCodeSpans?: Maybe<Array<Maybe<GrvscCodeSpan>>>;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  vssue?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GrvscThemeTokenData = {
  themeIdentifier: Scalars['String'];
  className: Scalars['String'];
  meta: Scalars['Int'];
  color: Scalars['String'];
  bold: Scalars['Boolean'];
  italic: Scalars['Boolean'];
  underline: Scalars['Boolean'];
};

export type GrvscToken = {
  text: Scalars['String'];
  startIndex: Scalars['Int'];
  endIndex: Scalars['Int'];
  scopes: Array<Scalars['String']>;
  html: Scalars['String'];
  className: Scalars['String'];
  defaultThemeTokenData: GrvscThemeTokenData;
  additionalThemeTokenData: Array<GrvscThemeTokenData>;
};

export type GrvscGutterCell = {
  className?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type GrvscTokenizedLine = {
  tokens: Array<GrvscToken>;
  gutterCells?: Maybe<Array<Maybe<GrvscGutterCell>>>;
  text: Scalars['String'];
  html: Scalars['String'];
  attrs: Scalars['JSON'];
  className: Scalars['String'];
  data: Scalars['JSON'];
  isHighlighted?: Maybe<Scalars['Boolean']>;
  lineNumber?: Maybe<Scalars['Int']>;
  diff?: Maybe<GrvscDiff>;
};

export type GrvscThemeConditionKind =
  | 'default'
  | 'matchMedia'
  | 'parentSelector';

export type GrvscThemeCondition = {
  condition: GrvscThemeConditionKind;
  value?: Maybe<Scalars['String']>;
};

export type GrvscTheme = {
  path: Scalars['String'];
  identifier: Scalars['String'];
  conditions: Array<GrvscThemeCondition>;
};

export type GrvscCodeBlock = Node & {
  index: Scalars['Int'];
  html: Scalars['String'];
  text: Scalars['String'];
  preClassName: Scalars['String'];
  codeClassName: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  defaultTheme: GrvscTheme;
  additionalThemes: Array<GrvscTheme>;
  tokenizedLines?: Maybe<Array<GrvscTokenizedLine>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GrvscCodeSpan = Node & {
  index: Scalars['Int'];
  html: Scalars['String'];
  text: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  defaultTheme: GrvscTheme;
  additionalThemes: Array<GrvscTheme>;
  tokens: Array<GrvscToken>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GrvscStylesheet = Node & {
  css: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GrvscThemeArgument = {
  identifier: Scalars['String'];
  conditions: Array<Scalars['String']>;
};

export type GrvscDiff =
  | 'ADD'
  | 'DEL';

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  fluid?: Maybe<ContentfulFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<Array<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ContentfulImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulSegment = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  content?: Maybe<ContentfulSegmentContentTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSegmentSys>;
  /** Returns all children nodes filtered by type contentfulSegmentContentTextNode */
  childrenContentfulSegmentContentTextNode?: Maybe<Array<Maybe<ContentfulSegmentContentTextNode>>>;
  /** Returns the first child node of type contentfulSegmentContentTextNode or null if there are no children of given type on this node */
  childContentfulSegmentContentTextNode?: Maybe<ContentfulSegmentContentTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSegmentCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSegmentUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSegmentSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSegmentSysContentType>;
};

export type ContentfulSegmentSysContentType = {
  sys?: Maybe<ContentfulSegmentSysContentTypeSys>;
};

export type ContentfulSegmentSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulWork = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulWorkDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulWorkSys>;
  thumbnail?: Maybe<ContentfulAsset>;
  /** Returns all children nodes filtered by type contentfulWorkDescriptionTextNode */
  childrenContentfulWorkDescriptionTextNode?: Maybe<Array<Maybe<ContentfulWorkDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulWorkDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulWorkDescriptionTextNode?: Maybe<ContentfulWorkDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulWorkDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWorkCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWorkUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulWorkSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulWorkSysContentType>;
};

export type ContentfulWorkSysContentType = {
  sys?: Maybe<ContentfulWorkSysContentTypeSys>;
};

export type ContentfulWorkSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulGacha = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  dataset?: Maybe<Array<Maybe<ContentfulGachaDatasetJsonNode>>>;
  distri?: Maybe<Array<Maybe<ContentfulGachaDistriJsonNode>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulGachaSys>;
  /** Returns all children nodes filtered by type contentfulGachaDistriJsonNode */
  childrenContentfulGachaDistriJsonNode?: Maybe<Array<Maybe<ContentfulGachaDistriJsonNode>>>;
  /** Returns the first child node of type contentfulGachaDistriJsonNode or null if there are no children of given type on this node */
  childContentfulGachaDistriJsonNode?: Maybe<ContentfulGachaDistriJsonNode>;
  /** Returns all children nodes filtered by type contentfulGachaDatasetJsonNode */
  childrenContentfulGachaDatasetJsonNode?: Maybe<Array<Maybe<ContentfulGachaDatasetJsonNode>>>;
  /** Returns the first child node of type contentfulGachaDatasetJsonNode or null if there are no children of given type on this node */
  childContentfulGachaDatasetJsonNode?: Maybe<ContentfulGachaDatasetJsonNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulGachaCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulGachaUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulGachaSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulGachaSysContentType>;
};

export type ContentfulGachaSysContentType = {
  sys?: Maybe<ContentfulGachaSysContentTypeSys>;
};

export type ContentfulGachaSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulGachaDistriJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  rare?: Maybe<Scalars['Int']>;
  percent?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulGachaDistriJsonNodeSys>;
};

export type ContentfulGachaDistriJsonNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulGachaDatasetJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  from?: Maybe<Scalars['Int']>;
  rare?: Maybe<Scalars['Int']>;
  tite?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  subgenre?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulGachaDatasetJsonNodeSys>;
};

export type ContentfulGachaDatasetJsonNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulWorkDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulWorkDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulWorkDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulSegmentContentTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulSegmentContentTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulSegmentContentTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  fileName?: Maybe<Scalars['String']>;
  codegenDelay?: Maybe<Scalars['Int']>;
  codegen?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  pageTransitionDelay?: Maybe<Scalars['Int']>;
  ignore?: Maybe<Array<Maybe<Scalars['String']>>>;
  prefixes?: Maybe<Array<Maybe<Scalars['String']>>>;
  theme?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  theme?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  grvscCodeBlock?: Maybe<GrvscCodeBlock>;
  allGrvscCodeBlock: GrvscCodeBlockConnection;
  grvscCodeSpan?: Maybe<GrvscCodeSpan>;
  allGrvscCodeSpan: GrvscCodeSpanConnection;
  grvscStylesheet?: Maybe<GrvscStylesheet>;
  allGrvscStylesheet: GrvscStylesheetConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulSegment?: Maybe<ContentfulSegment>;
  allContentfulSegment: ContentfulSegmentConnection;
  contentfulWork?: Maybe<ContentfulWork>;
  allContentfulWork: ContentfulWorkConnection;
  contentfulGacha?: Maybe<ContentfulGacha>;
  allContentfulGacha: ContentfulGachaConnection;
  contentfulGachaDistriJsonNode?: Maybe<ContentfulGachaDistriJsonNode>;
  allContentfulGachaDistriJsonNode: ContentfulGachaDistriJsonNodeConnection;
  contentfulGachaDatasetJsonNode?: Maybe<ContentfulGachaDatasetJsonNode>;
  allContentfulGachaDatasetJsonNode: ContentfulGachaDatasetJsonNodeConnection;
  contentfulWorkDescriptionTextNode?: Maybe<ContentfulWorkDescriptionTextNode>;
  allContentfulWorkDescriptionTextNode: ContentfulWorkDescriptionTextNodeConnection;
  contentfulSegmentContentTextNode?: Maybe<ContentfulSegmentContentTextNode>;
  allContentfulSegmentContentTextNode: ContentfulSegmentContentTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  grvscHighlight?: Maybe<GrvscCodeBlock>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  childrenGrvscCodeBlock?: Maybe<GrvscCodeBlockFilterListInput>;
  childGrvscCodeBlock?: Maybe<GrvscCodeBlockFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGrvscCodeBlockArgs = {
  index?: Maybe<IntQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  preClassName?: Maybe<StringQueryOperatorInput>;
  codeClassName?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<JsonQueryOperatorInput>;
  defaultTheme?: Maybe<GrvscThemeFilterInput>;
  additionalThemes?: Maybe<GrvscThemeFilterListInput>;
  tokenizedLines?: Maybe<GrvscTokenizedLineFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGrvscCodeBlockArgs = {
  filter?: Maybe<GrvscCodeBlockFilterInput>;
  sort?: Maybe<GrvscCodeBlockSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGrvscCodeSpanArgs = {
  index?: Maybe<IntQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  defaultTheme?: Maybe<GrvscThemeFilterInput>;
  additionalThemes?: Maybe<GrvscThemeFilterListInput>;
  tokens?: Maybe<GrvscTokenFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllGrvscCodeSpanArgs = {
  filter?: Maybe<GrvscCodeSpanFilterInput>;
  sort?: Maybe<GrvscCodeSpanSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGrvscStylesheetArgs = {
  defaultTheme?: Maybe<Scalars['String']>;
  additionalThemes?: Maybe<Array<GrvscThemeArgument>>;
  injectStyles?: Maybe<Scalars['Boolean']>;
};


export type QueryAllGrvscStylesheetArgs = {
  filter?: Maybe<GrvscStylesheetFilterInput>;
  sort?: Maybe<GrvscStylesheetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSegmentArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  content?: Maybe<ContentfulSegmentContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSegmentSysFilterInput>;
  childrenContentfulSegmentContentTextNode?: Maybe<ContentfulSegmentContentTextNodeFilterListInput>;
  childContentfulSegmentContentTextNode?: Maybe<ContentfulSegmentContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSegmentArgs = {
  filter?: Maybe<ContentfulSegmentFilterInput>;
  sort?: Maybe<ContentfulSegmentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWorkArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  genre?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulWorkDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWorkSysFilterInput>;
  thumbnail?: Maybe<ContentfulAssetFilterInput>;
  childrenContentfulWorkDescriptionTextNode?: Maybe<ContentfulWorkDescriptionTextNodeFilterListInput>;
  childContentfulWorkDescriptionTextNode?: Maybe<ContentfulWorkDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulWorkArgs = {
  filter?: Maybe<ContentfulWorkFilterInput>;
  sort?: Maybe<ContentfulWorkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulGachaArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  dataset?: Maybe<ContentfulGachaDatasetJsonNodeFilterListInput>;
  distri?: Maybe<ContentfulGachaDistriJsonNodeFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGachaSysFilterInput>;
  childrenContentfulGachaDistriJsonNode?: Maybe<ContentfulGachaDistriJsonNodeFilterListInput>;
  childContentfulGachaDistriJsonNode?: Maybe<ContentfulGachaDistriJsonNodeFilterInput>;
  childrenContentfulGachaDatasetJsonNode?: Maybe<ContentfulGachaDatasetJsonNodeFilterListInput>;
  childContentfulGachaDatasetJsonNode?: Maybe<ContentfulGachaDatasetJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulGachaArgs = {
  filter?: Maybe<ContentfulGachaFilterInput>;
  sort?: Maybe<ContentfulGachaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulGachaDistriJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  rare?: Maybe<IntQueryOperatorInput>;
  percent?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulGachaDistriJsonNodeSysFilterInput>;
};


export type QueryAllContentfulGachaDistriJsonNodeArgs = {
  filter?: Maybe<ContentfulGachaDistriJsonNodeFilterInput>;
  sort?: Maybe<ContentfulGachaDistriJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulGachaDatasetJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  from?: Maybe<IntQueryOperatorInput>;
  rare?: Maybe<IntQueryOperatorInput>;
  tite?: Maybe<StringQueryOperatorInput>;
  genre?: Maybe<StringQueryOperatorInput>;
  artist?: Maybe<StringQueryOperatorInput>;
  subgenre?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulGachaDatasetJsonNodeSysFilterInput>;
};


export type QueryAllContentfulGachaDatasetJsonNodeArgs = {
  filter?: Maybe<ContentfulGachaDatasetJsonNodeFilterInput>;
  sort?: Maybe<ContentfulGachaDatasetJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWorkDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulWorkDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulWorkDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulWorkDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulWorkDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSegmentContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulSegmentContentTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulSegmentContentTextNodeArgs = {
  filter?: Maybe<ContentfulSegmentContentTextNodeFilterInput>;
  sort?: Maybe<ContentfulSegmentContentTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGrvscHighlightArgs = {
  source: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['String']>;
  defaultTheme?: Maybe<Scalars['String']>;
  additionalThemes?: Maybe<Array<GrvscThemeArgument>>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  childrenGrvscCodeBlock?: Maybe<GrvscCodeBlockFilterListInput>;
  childGrvscCodeBlock?: Maybe<GrvscCodeBlockFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  vssue?: Maybe<BooleanQueryOperatorInput>;
  draft?: Maybe<BooleanQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type GrvscCodeBlockFilterListInput = {
  elemMatch?: Maybe<GrvscCodeBlockFilterInput>;
};

export type GrvscCodeBlockFilterInput = {
  index?: Maybe<IntQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  preClassName?: Maybe<StringQueryOperatorInput>;
  codeClassName?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<JsonQueryOperatorInput>;
  defaultTheme?: Maybe<GrvscThemeFilterInput>;
  additionalThemes?: Maybe<GrvscThemeFilterListInput>;
  tokenizedLines?: Maybe<GrvscTokenizedLineFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GrvscThemeFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  identifier?: Maybe<StringQueryOperatorInput>;
  conditions?: Maybe<GrvscThemeConditionFilterListInput>;
};

export type GrvscThemeConditionFilterListInput = {
  elemMatch?: Maybe<GrvscThemeConditionFilterInput>;
};

export type GrvscThemeConditionFilterInput = {
  condition?: Maybe<GrvscThemeConditionKindQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type GrvscThemeConditionKindQueryOperatorInput = {
  eq?: Maybe<GrvscThemeConditionKind>;
  ne?: Maybe<GrvscThemeConditionKind>;
  in?: Maybe<Array<Maybe<GrvscThemeConditionKind>>>;
  nin?: Maybe<Array<Maybe<GrvscThemeConditionKind>>>;
};

export type GrvscThemeFilterListInput = {
  elemMatch?: Maybe<GrvscThemeFilterInput>;
};

export type GrvscTokenizedLineFilterListInput = {
  elemMatch?: Maybe<GrvscTokenizedLineFilterInput>;
};

export type GrvscTokenizedLineFilterInput = {
  tokens?: Maybe<GrvscTokenFilterListInput>;
  gutterCells?: Maybe<GrvscGutterCellFilterListInput>;
  text?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  attrs?: Maybe<JsonQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<JsonQueryOperatorInput>;
  isHighlighted?: Maybe<BooleanQueryOperatorInput>;
  lineNumber?: Maybe<IntQueryOperatorInput>;
  diff?: Maybe<GrvscDiffQueryOperatorInput>;
};

export type GrvscTokenFilterListInput = {
  elemMatch?: Maybe<GrvscTokenFilterInput>;
};

export type GrvscTokenFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  startIndex?: Maybe<IntQueryOperatorInput>;
  endIndex?: Maybe<IntQueryOperatorInput>;
  scopes?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  defaultThemeTokenData?: Maybe<GrvscThemeTokenDataFilterInput>;
  additionalThemeTokenData?: Maybe<GrvscThemeTokenDataFilterListInput>;
};

export type GrvscThemeTokenDataFilterInput = {
  themeIdentifier?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<IntQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  bold?: Maybe<BooleanQueryOperatorInput>;
  italic?: Maybe<BooleanQueryOperatorInput>;
  underline?: Maybe<BooleanQueryOperatorInput>;
};

export type GrvscThemeTokenDataFilterListInput = {
  elemMatch?: Maybe<GrvscThemeTokenDataFilterInput>;
};

export type GrvscGutterCellFilterListInput = {
  elemMatch?: Maybe<GrvscGutterCellFilterInput>;
};

export type GrvscGutterCellFilterInput = {
  className?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type GrvscDiffQueryOperatorInput = {
  eq?: Maybe<GrvscDiff>;
  ne?: Maybe<GrvscDiff>;
  in?: Maybe<Array<Maybe<GrvscDiff>>>;
  nin?: Maybe<Array<Maybe<GrvscDiff>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___vssue'
  | 'childrenMarkdownRemark___frontmatter___draft'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___content'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___description'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___owner'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___type'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___path'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___path'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___parent___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___parent___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___content'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___contentDigest'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___description'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___ignoreType'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___mediaType'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___owner'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___type'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___vssue'
  | 'childMarkdownRemark___frontmatter___draft'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___childrenGrvscCodeBlock'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___parent___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___parent___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___content'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___description'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___owner'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___type'
  | 'childMarkdownRemark___childGrvscCodeBlock___index'
  | 'childMarkdownRemark___childGrvscCodeBlock___html'
  | 'childMarkdownRemark___childGrvscCodeBlock___text'
  | 'childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childMarkdownRemark___childGrvscCodeBlock___language'
  | 'childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___path'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___path'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff'
  | 'childMarkdownRemark___childGrvscCodeBlock___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___parent___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___parent___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___children___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___children___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___content'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___contentDigest'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___description'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___ignoreType'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___mediaType'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___owner'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___type'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  ogpImageUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___ogpImageUrl'
  | 'port'
  | 'host'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  codegenDelay?: Maybe<IntQueryOperatorInput>;
  codegen?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  ignore?: Maybe<StringQueryOperatorInput>;
  prefixes?: Maybe<StringQueryOperatorInput>;
  theme?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  theme?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___nodeAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___codegenDelay'
  | 'pluginCreator___pluginOptions___codegen'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___forceFullSync'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___anonymize'
  | 'pluginCreator___pluginOptions___respectDNT'
  | 'pluginCreator___pluginOptions___pageTransitionDelay'
  | 'pluginCreator___pluginOptions___ignore'
  | 'pluginCreator___pluginOptions___prefixes'
  | 'pluginCreator___pluginOptions___theme'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___date'
  | 'frontmatter___tags'
  | 'frontmatter___vssue'
  | 'frontmatter___draft'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'childrenGrvscCodeBlock'
  | 'childrenGrvscCodeBlock___index'
  | 'childrenGrvscCodeBlock___html'
  | 'childrenGrvscCodeBlock___text'
  | 'childrenGrvscCodeBlock___preClassName'
  | 'childrenGrvscCodeBlock___codeClassName'
  | 'childrenGrvscCodeBlock___language'
  | 'childrenGrvscCodeBlock___meta'
  | 'childrenGrvscCodeBlock___defaultTheme___path'
  | 'childrenGrvscCodeBlock___defaultTheme___identifier'
  | 'childrenGrvscCodeBlock___defaultTheme___conditions'
  | 'childrenGrvscCodeBlock___defaultTheme___conditions___condition'
  | 'childrenGrvscCodeBlock___defaultTheme___conditions___value'
  | 'childrenGrvscCodeBlock___additionalThemes'
  | 'childrenGrvscCodeBlock___additionalThemes___path'
  | 'childrenGrvscCodeBlock___additionalThemes___identifier'
  | 'childrenGrvscCodeBlock___additionalThemes___conditions'
  | 'childrenGrvscCodeBlock___additionalThemes___conditions___condition'
  | 'childrenGrvscCodeBlock___additionalThemes___conditions___value'
  | 'childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens___text'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens___startIndex'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens___endIndex'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens___scopes'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens___html'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens___className'
  | 'childrenGrvscCodeBlock___tokenizedLines___tokens___additionalThemeTokenData'
  | 'childrenGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childrenGrvscCodeBlock___tokenizedLines___gutterCells___className'
  | 'childrenGrvscCodeBlock___tokenizedLines___gutterCells___text'
  | 'childrenGrvscCodeBlock___tokenizedLines___text'
  | 'childrenGrvscCodeBlock___tokenizedLines___html'
  | 'childrenGrvscCodeBlock___tokenizedLines___attrs'
  | 'childrenGrvscCodeBlock___tokenizedLines___className'
  | 'childrenGrvscCodeBlock___tokenizedLines___data'
  | 'childrenGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childrenGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childrenGrvscCodeBlock___tokenizedLines___diff'
  | 'childrenGrvscCodeBlock___id'
  | 'childrenGrvscCodeBlock___parent___id'
  | 'childrenGrvscCodeBlock___parent___parent___id'
  | 'childrenGrvscCodeBlock___parent___parent___children'
  | 'childrenGrvscCodeBlock___parent___children'
  | 'childrenGrvscCodeBlock___parent___children___id'
  | 'childrenGrvscCodeBlock___parent___children___children'
  | 'childrenGrvscCodeBlock___parent___internal___content'
  | 'childrenGrvscCodeBlock___parent___internal___contentDigest'
  | 'childrenGrvscCodeBlock___parent___internal___description'
  | 'childrenGrvscCodeBlock___parent___internal___fieldOwners'
  | 'childrenGrvscCodeBlock___parent___internal___ignoreType'
  | 'childrenGrvscCodeBlock___parent___internal___mediaType'
  | 'childrenGrvscCodeBlock___parent___internal___owner'
  | 'childrenGrvscCodeBlock___parent___internal___type'
  | 'childrenGrvscCodeBlock___children'
  | 'childrenGrvscCodeBlock___children___id'
  | 'childrenGrvscCodeBlock___children___parent___id'
  | 'childrenGrvscCodeBlock___children___parent___children'
  | 'childrenGrvscCodeBlock___children___children'
  | 'childrenGrvscCodeBlock___children___children___id'
  | 'childrenGrvscCodeBlock___children___children___children'
  | 'childrenGrvscCodeBlock___children___internal___content'
  | 'childrenGrvscCodeBlock___children___internal___contentDigest'
  | 'childrenGrvscCodeBlock___children___internal___description'
  | 'childrenGrvscCodeBlock___children___internal___fieldOwners'
  | 'childrenGrvscCodeBlock___children___internal___ignoreType'
  | 'childrenGrvscCodeBlock___children___internal___mediaType'
  | 'childrenGrvscCodeBlock___children___internal___owner'
  | 'childrenGrvscCodeBlock___children___internal___type'
  | 'childrenGrvscCodeBlock___internal___content'
  | 'childrenGrvscCodeBlock___internal___contentDigest'
  | 'childrenGrvscCodeBlock___internal___description'
  | 'childrenGrvscCodeBlock___internal___fieldOwners'
  | 'childrenGrvscCodeBlock___internal___ignoreType'
  | 'childrenGrvscCodeBlock___internal___mediaType'
  | 'childrenGrvscCodeBlock___internal___owner'
  | 'childrenGrvscCodeBlock___internal___type'
  | 'childGrvscCodeBlock___index'
  | 'childGrvscCodeBlock___html'
  | 'childGrvscCodeBlock___text'
  | 'childGrvscCodeBlock___preClassName'
  | 'childGrvscCodeBlock___codeClassName'
  | 'childGrvscCodeBlock___language'
  | 'childGrvscCodeBlock___meta'
  | 'childGrvscCodeBlock___defaultTheme___path'
  | 'childGrvscCodeBlock___defaultTheme___identifier'
  | 'childGrvscCodeBlock___defaultTheme___conditions'
  | 'childGrvscCodeBlock___defaultTheme___conditions___condition'
  | 'childGrvscCodeBlock___defaultTheme___conditions___value'
  | 'childGrvscCodeBlock___additionalThemes'
  | 'childGrvscCodeBlock___additionalThemes___path'
  | 'childGrvscCodeBlock___additionalThemes___identifier'
  | 'childGrvscCodeBlock___additionalThemes___conditions'
  | 'childGrvscCodeBlock___additionalThemes___conditions___condition'
  | 'childGrvscCodeBlock___additionalThemes___conditions___value'
  | 'childGrvscCodeBlock___tokenizedLines'
  | 'childGrvscCodeBlock___tokenizedLines___tokens'
  | 'childGrvscCodeBlock___tokenizedLines___tokens___text'
  | 'childGrvscCodeBlock___tokenizedLines___tokens___startIndex'
  | 'childGrvscCodeBlock___tokenizedLines___tokens___endIndex'
  | 'childGrvscCodeBlock___tokenizedLines___tokens___scopes'
  | 'childGrvscCodeBlock___tokenizedLines___tokens___html'
  | 'childGrvscCodeBlock___tokenizedLines___tokens___className'
  | 'childGrvscCodeBlock___tokenizedLines___tokens___additionalThemeTokenData'
  | 'childGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childGrvscCodeBlock___tokenizedLines___gutterCells___className'
  | 'childGrvscCodeBlock___tokenizedLines___gutterCells___text'
  | 'childGrvscCodeBlock___tokenizedLines___text'
  | 'childGrvscCodeBlock___tokenizedLines___html'
  | 'childGrvscCodeBlock___tokenizedLines___attrs'
  | 'childGrvscCodeBlock___tokenizedLines___className'
  | 'childGrvscCodeBlock___tokenizedLines___data'
  | 'childGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childGrvscCodeBlock___tokenizedLines___diff'
  | 'childGrvscCodeBlock___id'
  | 'childGrvscCodeBlock___parent___id'
  | 'childGrvscCodeBlock___parent___parent___id'
  | 'childGrvscCodeBlock___parent___parent___children'
  | 'childGrvscCodeBlock___parent___children'
  | 'childGrvscCodeBlock___parent___children___id'
  | 'childGrvscCodeBlock___parent___children___children'
  | 'childGrvscCodeBlock___parent___internal___content'
  | 'childGrvscCodeBlock___parent___internal___contentDigest'
  | 'childGrvscCodeBlock___parent___internal___description'
  | 'childGrvscCodeBlock___parent___internal___fieldOwners'
  | 'childGrvscCodeBlock___parent___internal___ignoreType'
  | 'childGrvscCodeBlock___parent___internal___mediaType'
  | 'childGrvscCodeBlock___parent___internal___owner'
  | 'childGrvscCodeBlock___parent___internal___type'
  | 'childGrvscCodeBlock___children'
  | 'childGrvscCodeBlock___children___id'
  | 'childGrvscCodeBlock___children___parent___id'
  | 'childGrvscCodeBlock___children___parent___children'
  | 'childGrvscCodeBlock___children___children'
  | 'childGrvscCodeBlock___children___children___id'
  | 'childGrvscCodeBlock___children___children___children'
  | 'childGrvscCodeBlock___children___internal___content'
  | 'childGrvscCodeBlock___children___internal___contentDigest'
  | 'childGrvscCodeBlock___children___internal___description'
  | 'childGrvscCodeBlock___children___internal___fieldOwners'
  | 'childGrvscCodeBlock___children___internal___ignoreType'
  | 'childGrvscCodeBlock___children___internal___mediaType'
  | 'childGrvscCodeBlock___children___internal___owner'
  | 'childGrvscCodeBlock___children___internal___type'
  | 'childGrvscCodeBlock___internal___content'
  | 'childGrvscCodeBlock___internal___contentDigest'
  | 'childGrvscCodeBlock___internal___description'
  | 'childGrvscCodeBlock___internal___fieldOwners'
  | 'childGrvscCodeBlock___internal___ignoreType'
  | 'childGrvscCodeBlock___internal___mediaType'
  | 'childGrvscCodeBlock___internal___owner'
  | 'childGrvscCodeBlock___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GrvscCodeBlockConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GrvscCodeBlockEdge>;
  nodes: Array<GrvscCodeBlock>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GrvscCodeBlockGroupConnection>;
};


export type GrvscCodeBlockConnectionDistinctArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockConnectionMaxArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockConnectionMinArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockConnectionSumArgs = {
  field: GrvscCodeBlockFieldsEnum;
};


export type GrvscCodeBlockConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GrvscCodeBlockFieldsEnum;
};

export type GrvscCodeBlockEdge = {
  next?: Maybe<GrvscCodeBlock>;
  node: GrvscCodeBlock;
  previous?: Maybe<GrvscCodeBlock>;
};

export type GrvscCodeBlockFieldsEnum =
  | 'index'
  | 'html'
  | 'text'
  | 'preClassName'
  | 'codeClassName'
  | 'language'
  | 'meta'
  | 'defaultTheme___path'
  | 'defaultTheme___identifier'
  | 'defaultTheme___conditions'
  | 'defaultTheme___conditions___condition'
  | 'defaultTheme___conditions___value'
  | 'additionalThemes'
  | 'additionalThemes___path'
  | 'additionalThemes___identifier'
  | 'additionalThemes___conditions'
  | 'additionalThemes___conditions___condition'
  | 'additionalThemes___conditions___value'
  | 'tokenizedLines'
  | 'tokenizedLines___tokens'
  | 'tokenizedLines___tokens___text'
  | 'tokenizedLines___tokens___startIndex'
  | 'tokenizedLines___tokens___endIndex'
  | 'tokenizedLines___tokens___scopes'
  | 'tokenizedLines___tokens___html'
  | 'tokenizedLines___tokens___className'
  | 'tokenizedLines___tokens___defaultThemeTokenData___themeIdentifier'
  | 'tokenizedLines___tokens___defaultThemeTokenData___className'
  | 'tokenizedLines___tokens___defaultThemeTokenData___meta'
  | 'tokenizedLines___tokens___defaultThemeTokenData___color'
  | 'tokenizedLines___tokens___defaultThemeTokenData___bold'
  | 'tokenizedLines___tokens___defaultThemeTokenData___italic'
  | 'tokenizedLines___tokens___defaultThemeTokenData___underline'
  | 'tokenizedLines___tokens___additionalThemeTokenData'
  | 'tokenizedLines___tokens___additionalThemeTokenData___themeIdentifier'
  | 'tokenizedLines___tokens___additionalThemeTokenData___className'
  | 'tokenizedLines___tokens___additionalThemeTokenData___meta'
  | 'tokenizedLines___tokens___additionalThemeTokenData___color'
  | 'tokenizedLines___tokens___additionalThemeTokenData___bold'
  | 'tokenizedLines___tokens___additionalThemeTokenData___italic'
  | 'tokenizedLines___tokens___additionalThemeTokenData___underline'
  | 'tokenizedLines___gutterCells'
  | 'tokenizedLines___gutterCells___className'
  | 'tokenizedLines___gutterCells___text'
  | 'tokenizedLines___text'
  | 'tokenizedLines___html'
  | 'tokenizedLines___attrs'
  | 'tokenizedLines___className'
  | 'tokenizedLines___data'
  | 'tokenizedLines___isHighlighted'
  | 'tokenizedLines___lineNumber'
  | 'tokenizedLines___diff'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GrvscCodeBlockGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GrvscCodeBlockEdge>;
  nodes: Array<GrvscCodeBlock>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GrvscCodeBlockSortInput = {
  fields?: Maybe<Array<Maybe<GrvscCodeBlockFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GrvscCodeSpanConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GrvscCodeSpanEdge>;
  nodes: Array<GrvscCodeSpan>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GrvscCodeSpanGroupConnection>;
};


export type GrvscCodeSpanConnectionDistinctArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanConnectionMaxArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanConnectionMinArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanConnectionSumArgs = {
  field: GrvscCodeSpanFieldsEnum;
};


export type GrvscCodeSpanConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GrvscCodeSpanFieldsEnum;
};

export type GrvscCodeSpanEdge = {
  next?: Maybe<GrvscCodeSpan>;
  node: GrvscCodeSpan;
  previous?: Maybe<GrvscCodeSpan>;
};

export type GrvscCodeSpanFieldsEnum =
  | 'index'
  | 'html'
  | 'text'
  | 'className'
  | 'language'
  | 'defaultTheme___path'
  | 'defaultTheme___identifier'
  | 'defaultTheme___conditions'
  | 'defaultTheme___conditions___condition'
  | 'defaultTheme___conditions___value'
  | 'additionalThemes'
  | 'additionalThemes___path'
  | 'additionalThemes___identifier'
  | 'additionalThemes___conditions'
  | 'additionalThemes___conditions___condition'
  | 'additionalThemes___conditions___value'
  | 'tokens'
  | 'tokens___text'
  | 'tokens___startIndex'
  | 'tokens___endIndex'
  | 'tokens___scopes'
  | 'tokens___html'
  | 'tokens___className'
  | 'tokens___defaultThemeTokenData___themeIdentifier'
  | 'tokens___defaultThemeTokenData___className'
  | 'tokens___defaultThemeTokenData___meta'
  | 'tokens___defaultThemeTokenData___color'
  | 'tokens___defaultThemeTokenData___bold'
  | 'tokens___defaultThemeTokenData___italic'
  | 'tokens___defaultThemeTokenData___underline'
  | 'tokens___additionalThemeTokenData'
  | 'tokens___additionalThemeTokenData___themeIdentifier'
  | 'tokens___additionalThemeTokenData___className'
  | 'tokens___additionalThemeTokenData___meta'
  | 'tokens___additionalThemeTokenData___color'
  | 'tokens___additionalThemeTokenData___bold'
  | 'tokens___additionalThemeTokenData___italic'
  | 'tokens___additionalThemeTokenData___underline'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GrvscCodeSpanGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GrvscCodeSpanEdge>;
  nodes: Array<GrvscCodeSpan>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GrvscCodeSpanFilterInput = {
  index?: Maybe<IntQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  className?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  defaultTheme?: Maybe<GrvscThemeFilterInput>;
  additionalThemes?: Maybe<GrvscThemeFilterListInput>;
  tokens?: Maybe<GrvscTokenFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GrvscCodeSpanSortInput = {
  fields?: Maybe<Array<Maybe<GrvscCodeSpanFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GrvscStylesheetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GrvscStylesheetEdge>;
  nodes: Array<GrvscStylesheet>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GrvscStylesheetGroupConnection>;
};


export type GrvscStylesheetConnectionDistinctArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetConnectionMaxArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetConnectionMinArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetConnectionSumArgs = {
  field: GrvscStylesheetFieldsEnum;
};


export type GrvscStylesheetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GrvscStylesheetFieldsEnum;
};

export type GrvscStylesheetEdge = {
  next?: Maybe<GrvscStylesheet>;
  node: GrvscStylesheet;
  previous?: Maybe<GrvscStylesheet>;
};

export type GrvscStylesheetFieldsEnum =
  | 'css'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GrvscStylesheetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GrvscStylesheetEdge>;
  nodes: Array<GrvscStylesheet>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GrvscStylesheetFilterInput = {
  css?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GrvscStylesheetSortInput = {
  fields?: Maybe<Array<Maybe<GrvscStylesheetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'gatsbyImageData'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSegmentContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulSegmentContentTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulSegmentContentTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSegmentSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSegmentSysContentTypeFilterInput>;
};

export type ContentfulSegmentSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSegmentSysContentTypeSysFilterInput>;
};

export type ContentfulSegmentSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSegmentContentTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulSegmentContentTextNodeFilterInput>;
};

export type ContentfulSegmentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSegmentEdge>;
  nodes: Array<ContentfulSegment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSegmentGroupConnection>;
};


export type ContentfulSegmentConnectionDistinctArgs = {
  field: ContentfulSegmentFieldsEnum;
};


export type ContentfulSegmentConnectionMaxArgs = {
  field: ContentfulSegmentFieldsEnum;
};


export type ContentfulSegmentConnectionMinArgs = {
  field: ContentfulSegmentFieldsEnum;
};


export type ContentfulSegmentConnectionSumArgs = {
  field: ContentfulSegmentFieldsEnum;
};


export type ContentfulSegmentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSegmentFieldsEnum;
};

export type ContentfulSegmentEdge = {
  next?: Maybe<ContentfulSegment>;
  node: ContentfulSegment;
  previous?: Maybe<ContentfulSegment>;
};

export type ContentfulSegmentFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'type'
  | 'image___contentful_id'
  | 'image___id'
  | 'image___spaceId'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___sys___type'
  | 'image___sys___revision'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___gatsbyImageData'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | 'content___content'
  | 'content___sys___type'
  | 'content___childrenMarkdownRemark'
  | 'content___childrenMarkdownRemark___id'
  | 'content___childrenMarkdownRemark___frontmatter___title'
  | 'content___childrenMarkdownRemark___frontmatter___date'
  | 'content___childrenMarkdownRemark___frontmatter___tags'
  | 'content___childrenMarkdownRemark___frontmatter___vssue'
  | 'content___childrenMarkdownRemark___frontmatter___draft'
  | 'content___childrenMarkdownRemark___excerpt'
  | 'content___childrenMarkdownRemark___rawMarkdownBody'
  | 'content___childrenMarkdownRemark___fileAbsolutePath'
  | 'content___childrenMarkdownRemark___html'
  | 'content___childrenMarkdownRemark___htmlAst'
  | 'content___childrenMarkdownRemark___excerptAst'
  | 'content___childrenMarkdownRemark___headings'
  | 'content___childrenMarkdownRemark___headings___id'
  | 'content___childrenMarkdownRemark___headings___value'
  | 'content___childrenMarkdownRemark___headings___depth'
  | 'content___childrenMarkdownRemark___timeToRead'
  | 'content___childrenMarkdownRemark___tableOfContents'
  | 'content___childrenMarkdownRemark___wordCount___paragraphs'
  | 'content___childrenMarkdownRemark___wordCount___sentences'
  | 'content___childrenMarkdownRemark___wordCount___words'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'content___childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'content___childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'content___childrenMarkdownRemark___parent___id'
  | 'content___childrenMarkdownRemark___parent___children'
  | 'content___childrenMarkdownRemark___children'
  | 'content___childrenMarkdownRemark___children___id'
  | 'content___childrenMarkdownRemark___children___children'
  | 'content___childrenMarkdownRemark___internal___content'
  | 'content___childrenMarkdownRemark___internal___contentDigest'
  | 'content___childrenMarkdownRemark___internal___description'
  | 'content___childrenMarkdownRemark___internal___fieldOwners'
  | 'content___childrenMarkdownRemark___internal___ignoreType'
  | 'content___childrenMarkdownRemark___internal___mediaType'
  | 'content___childrenMarkdownRemark___internal___owner'
  | 'content___childrenMarkdownRemark___internal___type'
  | 'content___childMarkdownRemark___id'
  | 'content___childMarkdownRemark___frontmatter___title'
  | 'content___childMarkdownRemark___frontmatter___date'
  | 'content___childMarkdownRemark___frontmatter___tags'
  | 'content___childMarkdownRemark___frontmatter___vssue'
  | 'content___childMarkdownRemark___frontmatter___draft'
  | 'content___childMarkdownRemark___excerpt'
  | 'content___childMarkdownRemark___rawMarkdownBody'
  | 'content___childMarkdownRemark___fileAbsolutePath'
  | 'content___childMarkdownRemark___html'
  | 'content___childMarkdownRemark___htmlAst'
  | 'content___childMarkdownRemark___excerptAst'
  | 'content___childMarkdownRemark___headings'
  | 'content___childMarkdownRemark___headings___id'
  | 'content___childMarkdownRemark___headings___value'
  | 'content___childMarkdownRemark___headings___depth'
  | 'content___childMarkdownRemark___timeToRead'
  | 'content___childMarkdownRemark___tableOfContents'
  | 'content___childMarkdownRemark___wordCount___paragraphs'
  | 'content___childMarkdownRemark___wordCount___sentences'
  | 'content___childMarkdownRemark___wordCount___words'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'content___childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___index'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___html'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___text'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___language'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___id'
  | 'content___childMarkdownRemark___childGrvscCodeBlock___children'
  | 'content___childMarkdownRemark___parent___id'
  | 'content___childMarkdownRemark___parent___children'
  | 'content___childMarkdownRemark___children'
  | 'content___childMarkdownRemark___children___id'
  | 'content___childMarkdownRemark___children___children'
  | 'content___childMarkdownRemark___internal___content'
  | 'content___childMarkdownRemark___internal___contentDigest'
  | 'content___childMarkdownRemark___internal___description'
  | 'content___childMarkdownRemark___internal___fieldOwners'
  | 'content___childMarkdownRemark___internal___ignoreType'
  | 'content___childMarkdownRemark___internal___mediaType'
  | 'content___childMarkdownRemark___internal___owner'
  | 'content___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'childrenContentfulSegmentContentTextNode'
  | 'childrenContentfulSegmentContentTextNode___id'
  | 'childrenContentfulSegmentContentTextNode___parent___id'
  | 'childrenContentfulSegmentContentTextNode___parent___parent___id'
  | 'childrenContentfulSegmentContentTextNode___parent___parent___children'
  | 'childrenContentfulSegmentContentTextNode___parent___children'
  | 'childrenContentfulSegmentContentTextNode___parent___children___id'
  | 'childrenContentfulSegmentContentTextNode___parent___children___children'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___content'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___contentDigest'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___description'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___ignoreType'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___mediaType'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___owner'
  | 'childrenContentfulSegmentContentTextNode___parent___internal___type'
  | 'childrenContentfulSegmentContentTextNode___children'
  | 'childrenContentfulSegmentContentTextNode___children___id'
  | 'childrenContentfulSegmentContentTextNode___children___parent___id'
  | 'childrenContentfulSegmentContentTextNode___children___parent___children'
  | 'childrenContentfulSegmentContentTextNode___children___children'
  | 'childrenContentfulSegmentContentTextNode___children___children___id'
  | 'childrenContentfulSegmentContentTextNode___children___children___children'
  | 'childrenContentfulSegmentContentTextNode___children___internal___content'
  | 'childrenContentfulSegmentContentTextNode___children___internal___contentDigest'
  | 'childrenContentfulSegmentContentTextNode___children___internal___description'
  | 'childrenContentfulSegmentContentTextNode___children___internal___fieldOwners'
  | 'childrenContentfulSegmentContentTextNode___children___internal___ignoreType'
  | 'childrenContentfulSegmentContentTextNode___children___internal___mediaType'
  | 'childrenContentfulSegmentContentTextNode___children___internal___owner'
  | 'childrenContentfulSegmentContentTextNode___children___internal___type'
  | 'childrenContentfulSegmentContentTextNode___internal___content'
  | 'childrenContentfulSegmentContentTextNode___internal___contentDigest'
  | 'childrenContentfulSegmentContentTextNode___internal___description'
  | 'childrenContentfulSegmentContentTextNode___internal___fieldOwners'
  | 'childrenContentfulSegmentContentTextNode___internal___ignoreType'
  | 'childrenContentfulSegmentContentTextNode___internal___mediaType'
  | 'childrenContentfulSegmentContentTextNode___internal___owner'
  | 'childrenContentfulSegmentContentTextNode___internal___type'
  | 'childrenContentfulSegmentContentTextNode___content'
  | 'childrenContentfulSegmentContentTextNode___sys___type'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___id'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___title'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___date'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___tags'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___vssue'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___draft'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___excerpt'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___html'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___htmlAst'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___excerptAst'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___headings'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___headings___id'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___headings___value'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___headings___depth'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___timeToRead'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___tableOfContents'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___wordCount___sentences'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___wordCount___words'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___parent___id'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___parent___children'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___children'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___children___id'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___children___children'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___content'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___contentDigest'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___description'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___ignoreType'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___mediaType'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___owner'
  | 'childrenContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___type'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___id'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___title'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___date'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___tags'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___vssue'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___draft'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___excerpt'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___fileAbsolutePath'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___html'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___htmlAst'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___excerptAst'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___headings'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___headings___id'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___headings___value'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___headings___depth'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___timeToRead'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___tableOfContents'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___wordCount___words'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___index'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___html'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___text'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___language'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___id'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___children'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___parent___id'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___parent___children'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___children'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___children___id'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___children___children'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___content'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___description'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___mediaType'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___owner'
  | 'childrenContentfulSegmentContentTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulSegmentContentTextNode___id'
  | 'childContentfulSegmentContentTextNode___parent___id'
  | 'childContentfulSegmentContentTextNode___parent___parent___id'
  | 'childContentfulSegmentContentTextNode___parent___parent___children'
  | 'childContentfulSegmentContentTextNode___parent___children'
  | 'childContentfulSegmentContentTextNode___parent___children___id'
  | 'childContentfulSegmentContentTextNode___parent___children___children'
  | 'childContentfulSegmentContentTextNode___parent___internal___content'
  | 'childContentfulSegmentContentTextNode___parent___internal___contentDigest'
  | 'childContentfulSegmentContentTextNode___parent___internal___description'
  | 'childContentfulSegmentContentTextNode___parent___internal___fieldOwners'
  | 'childContentfulSegmentContentTextNode___parent___internal___ignoreType'
  | 'childContentfulSegmentContentTextNode___parent___internal___mediaType'
  | 'childContentfulSegmentContentTextNode___parent___internal___owner'
  | 'childContentfulSegmentContentTextNode___parent___internal___type'
  | 'childContentfulSegmentContentTextNode___children'
  | 'childContentfulSegmentContentTextNode___children___id'
  | 'childContentfulSegmentContentTextNode___children___parent___id'
  | 'childContentfulSegmentContentTextNode___children___parent___children'
  | 'childContentfulSegmentContentTextNode___children___children'
  | 'childContentfulSegmentContentTextNode___children___children___id'
  | 'childContentfulSegmentContentTextNode___children___children___children'
  | 'childContentfulSegmentContentTextNode___children___internal___content'
  | 'childContentfulSegmentContentTextNode___children___internal___contentDigest'
  | 'childContentfulSegmentContentTextNode___children___internal___description'
  | 'childContentfulSegmentContentTextNode___children___internal___fieldOwners'
  | 'childContentfulSegmentContentTextNode___children___internal___ignoreType'
  | 'childContentfulSegmentContentTextNode___children___internal___mediaType'
  | 'childContentfulSegmentContentTextNode___children___internal___owner'
  | 'childContentfulSegmentContentTextNode___children___internal___type'
  | 'childContentfulSegmentContentTextNode___internal___content'
  | 'childContentfulSegmentContentTextNode___internal___contentDigest'
  | 'childContentfulSegmentContentTextNode___internal___description'
  | 'childContentfulSegmentContentTextNode___internal___fieldOwners'
  | 'childContentfulSegmentContentTextNode___internal___ignoreType'
  | 'childContentfulSegmentContentTextNode___internal___mediaType'
  | 'childContentfulSegmentContentTextNode___internal___owner'
  | 'childContentfulSegmentContentTextNode___internal___type'
  | 'childContentfulSegmentContentTextNode___content'
  | 'childContentfulSegmentContentTextNode___sys___type'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___id'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___title'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___date'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___tags'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___vssue'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___frontmatter___draft'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___excerpt'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___rawMarkdownBody'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___fileAbsolutePath'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___html'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___htmlAst'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___excerptAst'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___headings'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___headings___id'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___headings___value'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___headings___depth'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___timeToRead'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___tableOfContents'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___wordCount___sentences'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___wordCount___words'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___parent___id'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___parent___children'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___children'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___children___id'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___children___children'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___content'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___contentDigest'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___description'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___fieldOwners'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___ignoreType'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___mediaType'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___owner'
  | 'childContentfulSegmentContentTextNode___childrenMarkdownRemark___internal___type'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___id'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___date'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___tags'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___vssue'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___frontmatter___draft'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___fileAbsolutePath'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___html'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___headings'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___index'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___html'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___text'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___language'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___id'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___childGrvscCodeBlock___children'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___children'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___children___id'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___children___children'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulSegmentContentTextNode___childMarkdownRemark___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulSegmentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSegmentEdge>;
  nodes: Array<ContentfulSegment>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSegmentFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  content?: Maybe<ContentfulSegmentContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSegmentSysFilterInput>;
  childrenContentfulSegmentContentTextNode?: Maybe<ContentfulSegmentContentTextNodeFilterListInput>;
  childContentfulSegmentContentTextNode?: Maybe<ContentfulSegmentContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSegmentSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSegmentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWorkDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulWorkDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulWorkDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWorkSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulWorkSysContentTypeFilterInput>;
};

export type ContentfulWorkSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulWorkSysContentTypeSysFilterInput>;
};

export type ContentfulWorkSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWorkDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulWorkDescriptionTextNodeFilterInput>;
};

export type ContentfulWorkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWorkEdge>;
  nodes: Array<ContentfulWork>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulWorkGroupConnection>;
};


export type ContentfulWorkConnectionDistinctArgs = {
  field: ContentfulWorkFieldsEnum;
};


export type ContentfulWorkConnectionMaxArgs = {
  field: ContentfulWorkFieldsEnum;
};


export type ContentfulWorkConnectionMinArgs = {
  field: ContentfulWorkFieldsEnum;
};


export type ContentfulWorkConnectionSumArgs = {
  field: ContentfulWorkFieldsEnum;
};


export type ContentfulWorkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWorkFieldsEnum;
};

export type ContentfulWorkEdge = {
  next?: Maybe<ContentfulWork>;
  node: ContentfulWork;
  previous?: Maybe<ContentfulWork>;
};

export type ContentfulWorkFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'date'
  | 'tags'
  | 'genre'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'description___sys___type'
  | 'description___childrenMarkdownRemark'
  | 'description___childrenMarkdownRemark___id'
  | 'description___childrenMarkdownRemark___frontmatter___title'
  | 'description___childrenMarkdownRemark___frontmatter___date'
  | 'description___childrenMarkdownRemark___frontmatter___tags'
  | 'description___childrenMarkdownRemark___frontmatter___vssue'
  | 'description___childrenMarkdownRemark___frontmatter___draft'
  | 'description___childrenMarkdownRemark___excerpt'
  | 'description___childrenMarkdownRemark___rawMarkdownBody'
  | 'description___childrenMarkdownRemark___fileAbsolutePath'
  | 'description___childrenMarkdownRemark___html'
  | 'description___childrenMarkdownRemark___htmlAst'
  | 'description___childrenMarkdownRemark___excerptAst'
  | 'description___childrenMarkdownRemark___headings'
  | 'description___childrenMarkdownRemark___headings___id'
  | 'description___childrenMarkdownRemark___headings___value'
  | 'description___childrenMarkdownRemark___headings___depth'
  | 'description___childrenMarkdownRemark___timeToRead'
  | 'description___childrenMarkdownRemark___tableOfContents'
  | 'description___childrenMarkdownRemark___wordCount___paragraphs'
  | 'description___childrenMarkdownRemark___wordCount___sentences'
  | 'description___childrenMarkdownRemark___wordCount___words'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'description___childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'description___childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'description___childrenMarkdownRemark___parent___id'
  | 'description___childrenMarkdownRemark___parent___children'
  | 'description___childrenMarkdownRemark___children'
  | 'description___childrenMarkdownRemark___children___id'
  | 'description___childrenMarkdownRemark___children___children'
  | 'description___childrenMarkdownRemark___internal___content'
  | 'description___childrenMarkdownRemark___internal___contentDigest'
  | 'description___childrenMarkdownRemark___internal___description'
  | 'description___childrenMarkdownRemark___internal___fieldOwners'
  | 'description___childrenMarkdownRemark___internal___ignoreType'
  | 'description___childrenMarkdownRemark___internal___mediaType'
  | 'description___childrenMarkdownRemark___internal___owner'
  | 'description___childrenMarkdownRemark___internal___type'
  | 'description___childMarkdownRemark___id'
  | 'description___childMarkdownRemark___frontmatter___title'
  | 'description___childMarkdownRemark___frontmatter___date'
  | 'description___childMarkdownRemark___frontmatter___tags'
  | 'description___childMarkdownRemark___frontmatter___vssue'
  | 'description___childMarkdownRemark___frontmatter___draft'
  | 'description___childMarkdownRemark___excerpt'
  | 'description___childMarkdownRemark___rawMarkdownBody'
  | 'description___childMarkdownRemark___fileAbsolutePath'
  | 'description___childMarkdownRemark___html'
  | 'description___childMarkdownRemark___htmlAst'
  | 'description___childMarkdownRemark___excerptAst'
  | 'description___childMarkdownRemark___headings'
  | 'description___childMarkdownRemark___headings___id'
  | 'description___childMarkdownRemark___headings___value'
  | 'description___childMarkdownRemark___headings___depth'
  | 'description___childMarkdownRemark___timeToRead'
  | 'description___childMarkdownRemark___tableOfContents'
  | 'description___childMarkdownRemark___wordCount___paragraphs'
  | 'description___childMarkdownRemark___wordCount___sentences'
  | 'description___childMarkdownRemark___wordCount___words'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'description___childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___index'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___html'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___text'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___language'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___id'
  | 'description___childMarkdownRemark___childGrvscCodeBlock___children'
  | 'description___childMarkdownRemark___parent___id'
  | 'description___childMarkdownRemark___parent___children'
  | 'description___childMarkdownRemark___children'
  | 'description___childMarkdownRemark___children___id'
  | 'description___childMarkdownRemark___children___children'
  | 'description___childMarkdownRemark___internal___content'
  | 'description___childMarkdownRemark___internal___contentDigest'
  | 'description___childMarkdownRemark___internal___description'
  | 'description___childMarkdownRemark___internal___fieldOwners'
  | 'description___childMarkdownRemark___internal___ignoreType'
  | 'description___childMarkdownRemark___internal___mediaType'
  | 'description___childMarkdownRemark___internal___owner'
  | 'description___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'thumbnail___contentful_id'
  | 'thumbnail___id'
  | 'thumbnail___spaceId'
  | 'thumbnail___createdAt'
  | 'thumbnail___updatedAt'
  | 'thumbnail___file___url'
  | 'thumbnail___file___details___size'
  | 'thumbnail___file___fileName'
  | 'thumbnail___file___contentType'
  | 'thumbnail___title'
  | 'thumbnail___description'
  | 'thumbnail___node_locale'
  | 'thumbnail___sys___type'
  | 'thumbnail___sys___revision'
  | 'thumbnail___fixed___base64'
  | 'thumbnail___fixed___tracedSVG'
  | 'thumbnail___fixed___aspectRatio'
  | 'thumbnail___fixed___width'
  | 'thumbnail___fixed___height'
  | 'thumbnail___fixed___src'
  | 'thumbnail___fixed___srcSet'
  | 'thumbnail___fixed___srcWebp'
  | 'thumbnail___fixed___srcSetWebp'
  | 'thumbnail___fluid___base64'
  | 'thumbnail___fluid___tracedSVG'
  | 'thumbnail___fluid___aspectRatio'
  | 'thumbnail___fluid___src'
  | 'thumbnail___fluid___srcSet'
  | 'thumbnail___fluid___srcWebp'
  | 'thumbnail___fluid___srcSetWebp'
  | 'thumbnail___fluid___sizes'
  | 'thumbnail___gatsbyImageData'
  | 'thumbnail___resize___base64'
  | 'thumbnail___resize___tracedSVG'
  | 'thumbnail___resize___src'
  | 'thumbnail___resize___width'
  | 'thumbnail___resize___height'
  | 'thumbnail___resize___aspectRatio'
  | 'thumbnail___parent___id'
  | 'thumbnail___parent___parent___id'
  | 'thumbnail___parent___parent___children'
  | 'thumbnail___parent___children'
  | 'thumbnail___parent___children___id'
  | 'thumbnail___parent___children___children'
  | 'thumbnail___parent___internal___content'
  | 'thumbnail___parent___internal___contentDigest'
  | 'thumbnail___parent___internal___description'
  | 'thumbnail___parent___internal___fieldOwners'
  | 'thumbnail___parent___internal___ignoreType'
  | 'thumbnail___parent___internal___mediaType'
  | 'thumbnail___parent___internal___owner'
  | 'thumbnail___parent___internal___type'
  | 'thumbnail___children'
  | 'thumbnail___children___id'
  | 'thumbnail___children___parent___id'
  | 'thumbnail___children___parent___children'
  | 'thumbnail___children___children'
  | 'thumbnail___children___children___id'
  | 'thumbnail___children___children___children'
  | 'thumbnail___children___internal___content'
  | 'thumbnail___children___internal___contentDigest'
  | 'thumbnail___children___internal___description'
  | 'thumbnail___children___internal___fieldOwners'
  | 'thumbnail___children___internal___ignoreType'
  | 'thumbnail___children___internal___mediaType'
  | 'thumbnail___children___internal___owner'
  | 'thumbnail___children___internal___type'
  | 'thumbnail___internal___content'
  | 'thumbnail___internal___contentDigest'
  | 'thumbnail___internal___description'
  | 'thumbnail___internal___fieldOwners'
  | 'thumbnail___internal___ignoreType'
  | 'thumbnail___internal___mediaType'
  | 'thumbnail___internal___owner'
  | 'thumbnail___internal___type'
  | 'childrenContentfulWorkDescriptionTextNode'
  | 'childrenContentfulWorkDescriptionTextNode___id'
  | 'childrenContentfulWorkDescriptionTextNode___parent___id'
  | 'childrenContentfulWorkDescriptionTextNode___parent___parent___id'
  | 'childrenContentfulWorkDescriptionTextNode___parent___parent___children'
  | 'childrenContentfulWorkDescriptionTextNode___parent___children'
  | 'childrenContentfulWorkDescriptionTextNode___parent___children___id'
  | 'childrenContentfulWorkDescriptionTextNode___parent___children___children'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___content'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___description'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___mediaType'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___owner'
  | 'childrenContentfulWorkDescriptionTextNode___parent___internal___type'
  | 'childrenContentfulWorkDescriptionTextNode___children'
  | 'childrenContentfulWorkDescriptionTextNode___children___id'
  | 'childrenContentfulWorkDescriptionTextNode___children___parent___id'
  | 'childrenContentfulWorkDescriptionTextNode___children___parent___children'
  | 'childrenContentfulWorkDescriptionTextNode___children___children'
  | 'childrenContentfulWorkDescriptionTextNode___children___children___id'
  | 'childrenContentfulWorkDescriptionTextNode___children___children___children'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___content'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___contentDigest'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___description'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___ignoreType'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___mediaType'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___owner'
  | 'childrenContentfulWorkDescriptionTextNode___children___internal___type'
  | 'childrenContentfulWorkDescriptionTextNode___internal___content'
  | 'childrenContentfulWorkDescriptionTextNode___internal___contentDigest'
  | 'childrenContentfulWorkDescriptionTextNode___internal___description'
  | 'childrenContentfulWorkDescriptionTextNode___internal___fieldOwners'
  | 'childrenContentfulWorkDescriptionTextNode___internal___ignoreType'
  | 'childrenContentfulWorkDescriptionTextNode___internal___mediaType'
  | 'childrenContentfulWorkDescriptionTextNode___internal___owner'
  | 'childrenContentfulWorkDescriptionTextNode___internal___type'
  | 'childrenContentfulWorkDescriptionTextNode___description'
  | 'childrenContentfulWorkDescriptionTextNode___sys___type'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___id'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___title'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___date'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___tags'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___vssue'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___draft'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___excerpt'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___html'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___htmlAst'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___excerptAst'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings___id'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings___value'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings___depth'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___timeToRead'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___tableOfContents'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___wordCount___sentences'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___wordCount___words'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___parent___id'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___parent___children'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___children'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___children___id'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___children___children'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___content'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___contentDigest'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___description'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___ignoreType'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___mediaType'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___owner'
  | 'childrenContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___type'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___id'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___title'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___date'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___tags'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___vssue'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___draft'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___fileAbsolutePath'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___html'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___headings'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___headings___id'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___headings___value'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___headings___depth'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___wordCount___words'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___index'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___html'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___text'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___language'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___id'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___children'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___parent___id'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___parent___children'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___children'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___children___id'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___children___children'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___content'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___description'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___mediaType'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___owner'
  | 'childrenContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulWorkDescriptionTextNode___id'
  | 'childContentfulWorkDescriptionTextNode___parent___id'
  | 'childContentfulWorkDescriptionTextNode___parent___parent___id'
  | 'childContentfulWorkDescriptionTextNode___parent___parent___children'
  | 'childContentfulWorkDescriptionTextNode___parent___children'
  | 'childContentfulWorkDescriptionTextNode___parent___children___id'
  | 'childContentfulWorkDescriptionTextNode___parent___children___children'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___content'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___description'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___owner'
  | 'childContentfulWorkDescriptionTextNode___parent___internal___type'
  | 'childContentfulWorkDescriptionTextNode___children'
  | 'childContentfulWorkDescriptionTextNode___children___id'
  | 'childContentfulWorkDescriptionTextNode___children___parent___id'
  | 'childContentfulWorkDescriptionTextNode___children___parent___children'
  | 'childContentfulWorkDescriptionTextNode___children___children'
  | 'childContentfulWorkDescriptionTextNode___children___children___id'
  | 'childContentfulWorkDescriptionTextNode___children___children___children'
  | 'childContentfulWorkDescriptionTextNode___children___internal___content'
  | 'childContentfulWorkDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulWorkDescriptionTextNode___children___internal___description'
  | 'childContentfulWorkDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulWorkDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulWorkDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulWorkDescriptionTextNode___children___internal___owner'
  | 'childContentfulWorkDescriptionTextNode___children___internal___type'
  | 'childContentfulWorkDescriptionTextNode___internal___content'
  | 'childContentfulWorkDescriptionTextNode___internal___contentDigest'
  | 'childContentfulWorkDescriptionTextNode___internal___description'
  | 'childContentfulWorkDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulWorkDescriptionTextNode___internal___ignoreType'
  | 'childContentfulWorkDescriptionTextNode___internal___mediaType'
  | 'childContentfulWorkDescriptionTextNode___internal___owner'
  | 'childContentfulWorkDescriptionTextNode___internal___type'
  | 'childContentfulWorkDescriptionTextNode___description'
  | 'childContentfulWorkDescriptionTextNode___sys___type'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___id'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___title'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___date'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___tags'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___vssue'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___frontmatter___draft'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___excerpt'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___rawMarkdownBody'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___fileAbsolutePath'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___html'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___htmlAst'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___excerptAst'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings___id'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings___value'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___headings___depth'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___timeToRead'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___tableOfContents'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___wordCount___sentences'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___wordCount___words'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___parent___id'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___parent___children'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___children'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___children___id'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___children___children'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___content'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___contentDigest'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___description'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___fieldOwners'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___ignoreType'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___mediaType'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___owner'
  | 'childContentfulWorkDescriptionTextNode___childrenMarkdownRemark___internal___type'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___id'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___date'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___tags'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___vssue'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___frontmatter___draft'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___fileAbsolutePath'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___html'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___headings'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___index'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___html'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___text'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___language'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___id'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___childGrvscCodeBlock___children'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___children'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___children___id'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___children___children'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulWorkDescriptionTextNode___childMarkdownRemark___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulWorkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWorkEdge>;
  nodes: Array<ContentfulWork>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWorkFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  genre?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulWorkDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWorkSysFilterInput>;
  thumbnail?: Maybe<ContentfulAssetFilterInput>;
  childrenContentfulWorkDescriptionTextNode?: Maybe<ContentfulWorkDescriptionTextNodeFilterListInput>;
  childContentfulWorkDescriptionTextNode?: Maybe<ContentfulWorkDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulWorkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWorkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulGachaDatasetJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulGachaDatasetJsonNodeFilterInput>;
};

export type ContentfulGachaDatasetJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  from?: Maybe<IntQueryOperatorInput>;
  rare?: Maybe<IntQueryOperatorInput>;
  tite?: Maybe<StringQueryOperatorInput>;
  genre?: Maybe<StringQueryOperatorInput>;
  artist?: Maybe<StringQueryOperatorInput>;
  subgenre?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulGachaDatasetJsonNodeSysFilterInput>;
};

export type ContentfulGachaDatasetJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGachaDistriJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulGachaDistriJsonNodeFilterInput>;
};

export type ContentfulGachaDistriJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  rare?: Maybe<IntQueryOperatorInput>;
  percent?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulGachaDistriJsonNodeSysFilterInput>;
};

export type ContentfulGachaDistriJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGachaSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulGachaSysContentTypeFilterInput>;
};

export type ContentfulGachaSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulGachaSysContentTypeSysFilterInput>;
};

export type ContentfulGachaSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGachaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGachaEdge>;
  nodes: Array<ContentfulGacha>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulGachaGroupConnection>;
};


export type ContentfulGachaConnectionDistinctArgs = {
  field: ContentfulGachaFieldsEnum;
};


export type ContentfulGachaConnectionMaxArgs = {
  field: ContentfulGachaFieldsEnum;
};


export type ContentfulGachaConnectionMinArgs = {
  field: ContentfulGachaFieldsEnum;
};


export type ContentfulGachaConnectionSumArgs = {
  field: ContentfulGachaFieldsEnum;
};


export type ContentfulGachaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGachaFieldsEnum;
};

export type ContentfulGachaEdge = {
  next?: Maybe<ContentfulGacha>;
  node: ContentfulGacha;
  previous?: Maybe<ContentfulGacha>;
};

export type ContentfulGachaFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'dataset'
  | 'dataset___id'
  | 'dataset___parent___id'
  | 'dataset___parent___parent___id'
  | 'dataset___parent___parent___children'
  | 'dataset___parent___children'
  | 'dataset___parent___children___id'
  | 'dataset___parent___children___children'
  | 'dataset___parent___internal___content'
  | 'dataset___parent___internal___contentDigest'
  | 'dataset___parent___internal___description'
  | 'dataset___parent___internal___fieldOwners'
  | 'dataset___parent___internal___ignoreType'
  | 'dataset___parent___internal___mediaType'
  | 'dataset___parent___internal___owner'
  | 'dataset___parent___internal___type'
  | 'dataset___children'
  | 'dataset___children___id'
  | 'dataset___children___parent___id'
  | 'dataset___children___parent___children'
  | 'dataset___children___children'
  | 'dataset___children___children___id'
  | 'dataset___children___children___children'
  | 'dataset___children___internal___content'
  | 'dataset___children___internal___contentDigest'
  | 'dataset___children___internal___description'
  | 'dataset___children___internal___fieldOwners'
  | 'dataset___children___internal___ignoreType'
  | 'dataset___children___internal___mediaType'
  | 'dataset___children___internal___owner'
  | 'dataset___children___internal___type'
  | 'dataset___internal___content'
  | 'dataset___internal___contentDigest'
  | 'dataset___internal___description'
  | 'dataset___internal___fieldOwners'
  | 'dataset___internal___ignoreType'
  | 'dataset___internal___mediaType'
  | 'dataset___internal___owner'
  | 'dataset___internal___type'
  | 'dataset___from'
  | 'dataset___rare'
  | 'dataset___tite'
  | 'dataset___genre'
  | 'dataset___artist'
  | 'dataset___subgenre'
  | 'dataset___sys___type'
  | 'distri'
  | 'distri___id'
  | 'distri___parent___id'
  | 'distri___parent___parent___id'
  | 'distri___parent___parent___children'
  | 'distri___parent___children'
  | 'distri___parent___children___id'
  | 'distri___parent___children___children'
  | 'distri___parent___internal___content'
  | 'distri___parent___internal___contentDigest'
  | 'distri___parent___internal___description'
  | 'distri___parent___internal___fieldOwners'
  | 'distri___parent___internal___ignoreType'
  | 'distri___parent___internal___mediaType'
  | 'distri___parent___internal___owner'
  | 'distri___parent___internal___type'
  | 'distri___children'
  | 'distri___children___id'
  | 'distri___children___parent___id'
  | 'distri___children___parent___children'
  | 'distri___children___children'
  | 'distri___children___children___id'
  | 'distri___children___children___children'
  | 'distri___children___internal___content'
  | 'distri___children___internal___contentDigest'
  | 'distri___children___internal___description'
  | 'distri___children___internal___fieldOwners'
  | 'distri___children___internal___ignoreType'
  | 'distri___children___internal___mediaType'
  | 'distri___children___internal___owner'
  | 'distri___children___internal___type'
  | 'distri___internal___content'
  | 'distri___internal___contentDigest'
  | 'distri___internal___description'
  | 'distri___internal___fieldOwners'
  | 'distri___internal___ignoreType'
  | 'distri___internal___mediaType'
  | 'distri___internal___owner'
  | 'distri___internal___type'
  | 'distri___rare'
  | 'distri___percent'
  | 'distri___name'
  | 'distri___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'childrenContentfulGachaDistriJsonNode'
  | 'childrenContentfulGachaDistriJsonNode___id'
  | 'childrenContentfulGachaDistriJsonNode___parent___id'
  | 'childrenContentfulGachaDistriJsonNode___parent___parent___id'
  | 'childrenContentfulGachaDistriJsonNode___parent___parent___children'
  | 'childrenContentfulGachaDistriJsonNode___parent___children'
  | 'childrenContentfulGachaDistriJsonNode___parent___children___id'
  | 'childrenContentfulGachaDistriJsonNode___parent___children___children'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___content'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___contentDigest'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___description'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___fieldOwners'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___ignoreType'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___mediaType'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___owner'
  | 'childrenContentfulGachaDistriJsonNode___parent___internal___type'
  | 'childrenContentfulGachaDistriJsonNode___children'
  | 'childrenContentfulGachaDistriJsonNode___children___id'
  | 'childrenContentfulGachaDistriJsonNode___children___parent___id'
  | 'childrenContentfulGachaDistriJsonNode___children___parent___children'
  | 'childrenContentfulGachaDistriJsonNode___children___children'
  | 'childrenContentfulGachaDistriJsonNode___children___children___id'
  | 'childrenContentfulGachaDistriJsonNode___children___children___children'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___content'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___contentDigest'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___description'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___fieldOwners'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___ignoreType'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___mediaType'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___owner'
  | 'childrenContentfulGachaDistriJsonNode___children___internal___type'
  | 'childrenContentfulGachaDistriJsonNode___internal___content'
  | 'childrenContentfulGachaDistriJsonNode___internal___contentDigest'
  | 'childrenContentfulGachaDistriJsonNode___internal___description'
  | 'childrenContentfulGachaDistriJsonNode___internal___fieldOwners'
  | 'childrenContentfulGachaDistriJsonNode___internal___ignoreType'
  | 'childrenContentfulGachaDistriJsonNode___internal___mediaType'
  | 'childrenContentfulGachaDistriJsonNode___internal___owner'
  | 'childrenContentfulGachaDistriJsonNode___internal___type'
  | 'childrenContentfulGachaDistriJsonNode___rare'
  | 'childrenContentfulGachaDistriJsonNode___percent'
  | 'childrenContentfulGachaDistriJsonNode___name'
  | 'childrenContentfulGachaDistriJsonNode___sys___type'
  | 'childContentfulGachaDistriJsonNode___id'
  | 'childContentfulGachaDistriJsonNode___parent___id'
  | 'childContentfulGachaDistriJsonNode___parent___parent___id'
  | 'childContentfulGachaDistriJsonNode___parent___parent___children'
  | 'childContentfulGachaDistriJsonNode___parent___children'
  | 'childContentfulGachaDistriJsonNode___parent___children___id'
  | 'childContentfulGachaDistriJsonNode___parent___children___children'
  | 'childContentfulGachaDistriJsonNode___parent___internal___content'
  | 'childContentfulGachaDistriJsonNode___parent___internal___contentDigest'
  | 'childContentfulGachaDistriJsonNode___parent___internal___description'
  | 'childContentfulGachaDistriJsonNode___parent___internal___fieldOwners'
  | 'childContentfulGachaDistriJsonNode___parent___internal___ignoreType'
  | 'childContentfulGachaDistriJsonNode___parent___internal___mediaType'
  | 'childContentfulGachaDistriJsonNode___parent___internal___owner'
  | 'childContentfulGachaDistriJsonNode___parent___internal___type'
  | 'childContentfulGachaDistriJsonNode___children'
  | 'childContentfulGachaDistriJsonNode___children___id'
  | 'childContentfulGachaDistriJsonNode___children___parent___id'
  | 'childContentfulGachaDistriJsonNode___children___parent___children'
  | 'childContentfulGachaDistriJsonNode___children___children'
  | 'childContentfulGachaDistriJsonNode___children___children___id'
  | 'childContentfulGachaDistriJsonNode___children___children___children'
  | 'childContentfulGachaDistriJsonNode___children___internal___content'
  | 'childContentfulGachaDistriJsonNode___children___internal___contentDigest'
  | 'childContentfulGachaDistriJsonNode___children___internal___description'
  | 'childContentfulGachaDistriJsonNode___children___internal___fieldOwners'
  | 'childContentfulGachaDistriJsonNode___children___internal___ignoreType'
  | 'childContentfulGachaDistriJsonNode___children___internal___mediaType'
  | 'childContentfulGachaDistriJsonNode___children___internal___owner'
  | 'childContentfulGachaDistriJsonNode___children___internal___type'
  | 'childContentfulGachaDistriJsonNode___internal___content'
  | 'childContentfulGachaDistriJsonNode___internal___contentDigest'
  | 'childContentfulGachaDistriJsonNode___internal___description'
  | 'childContentfulGachaDistriJsonNode___internal___fieldOwners'
  | 'childContentfulGachaDistriJsonNode___internal___ignoreType'
  | 'childContentfulGachaDistriJsonNode___internal___mediaType'
  | 'childContentfulGachaDistriJsonNode___internal___owner'
  | 'childContentfulGachaDistriJsonNode___internal___type'
  | 'childContentfulGachaDistriJsonNode___rare'
  | 'childContentfulGachaDistriJsonNode___percent'
  | 'childContentfulGachaDistriJsonNode___name'
  | 'childContentfulGachaDistriJsonNode___sys___type'
  | 'childrenContentfulGachaDatasetJsonNode'
  | 'childrenContentfulGachaDatasetJsonNode___id'
  | 'childrenContentfulGachaDatasetJsonNode___parent___id'
  | 'childrenContentfulGachaDatasetJsonNode___parent___parent___id'
  | 'childrenContentfulGachaDatasetJsonNode___parent___parent___children'
  | 'childrenContentfulGachaDatasetJsonNode___parent___children'
  | 'childrenContentfulGachaDatasetJsonNode___parent___children___id'
  | 'childrenContentfulGachaDatasetJsonNode___parent___children___children'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___content'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___contentDigest'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___description'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___fieldOwners'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___ignoreType'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___mediaType'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___owner'
  | 'childrenContentfulGachaDatasetJsonNode___parent___internal___type'
  | 'childrenContentfulGachaDatasetJsonNode___children'
  | 'childrenContentfulGachaDatasetJsonNode___children___id'
  | 'childrenContentfulGachaDatasetJsonNode___children___parent___id'
  | 'childrenContentfulGachaDatasetJsonNode___children___parent___children'
  | 'childrenContentfulGachaDatasetJsonNode___children___children'
  | 'childrenContentfulGachaDatasetJsonNode___children___children___id'
  | 'childrenContentfulGachaDatasetJsonNode___children___children___children'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___content'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___contentDigest'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___description'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___fieldOwners'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___ignoreType'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___mediaType'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___owner'
  | 'childrenContentfulGachaDatasetJsonNode___children___internal___type'
  | 'childrenContentfulGachaDatasetJsonNode___internal___content'
  | 'childrenContentfulGachaDatasetJsonNode___internal___contentDigest'
  | 'childrenContentfulGachaDatasetJsonNode___internal___description'
  | 'childrenContentfulGachaDatasetJsonNode___internal___fieldOwners'
  | 'childrenContentfulGachaDatasetJsonNode___internal___ignoreType'
  | 'childrenContentfulGachaDatasetJsonNode___internal___mediaType'
  | 'childrenContentfulGachaDatasetJsonNode___internal___owner'
  | 'childrenContentfulGachaDatasetJsonNode___internal___type'
  | 'childrenContentfulGachaDatasetJsonNode___from'
  | 'childrenContentfulGachaDatasetJsonNode___rare'
  | 'childrenContentfulGachaDatasetJsonNode___tite'
  | 'childrenContentfulGachaDatasetJsonNode___genre'
  | 'childrenContentfulGachaDatasetJsonNode___artist'
  | 'childrenContentfulGachaDatasetJsonNode___subgenre'
  | 'childrenContentfulGachaDatasetJsonNode___sys___type'
  | 'childContentfulGachaDatasetJsonNode___id'
  | 'childContentfulGachaDatasetJsonNode___parent___id'
  | 'childContentfulGachaDatasetJsonNode___parent___parent___id'
  | 'childContentfulGachaDatasetJsonNode___parent___parent___children'
  | 'childContentfulGachaDatasetJsonNode___parent___children'
  | 'childContentfulGachaDatasetJsonNode___parent___children___id'
  | 'childContentfulGachaDatasetJsonNode___parent___children___children'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___content'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___contentDigest'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___description'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___fieldOwners'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___ignoreType'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___mediaType'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___owner'
  | 'childContentfulGachaDatasetJsonNode___parent___internal___type'
  | 'childContentfulGachaDatasetJsonNode___children'
  | 'childContentfulGachaDatasetJsonNode___children___id'
  | 'childContentfulGachaDatasetJsonNode___children___parent___id'
  | 'childContentfulGachaDatasetJsonNode___children___parent___children'
  | 'childContentfulGachaDatasetJsonNode___children___children'
  | 'childContentfulGachaDatasetJsonNode___children___children___id'
  | 'childContentfulGachaDatasetJsonNode___children___children___children'
  | 'childContentfulGachaDatasetJsonNode___children___internal___content'
  | 'childContentfulGachaDatasetJsonNode___children___internal___contentDigest'
  | 'childContentfulGachaDatasetJsonNode___children___internal___description'
  | 'childContentfulGachaDatasetJsonNode___children___internal___fieldOwners'
  | 'childContentfulGachaDatasetJsonNode___children___internal___ignoreType'
  | 'childContentfulGachaDatasetJsonNode___children___internal___mediaType'
  | 'childContentfulGachaDatasetJsonNode___children___internal___owner'
  | 'childContentfulGachaDatasetJsonNode___children___internal___type'
  | 'childContentfulGachaDatasetJsonNode___internal___content'
  | 'childContentfulGachaDatasetJsonNode___internal___contentDigest'
  | 'childContentfulGachaDatasetJsonNode___internal___description'
  | 'childContentfulGachaDatasetJsonNode___internal___fieldOwners'
  | 'childContentfulGachaDatasetJsonNode___internal___ignoreType'
  | 'childContentfulGachaDatasetJsonNode___internal___mediaType'
  | 'childContentfulGachaDatasetJsonNode___internal___owner'
  | 'childContentfulGachaDatasetJsonNode___internal___type'
  | 'childContentfulGachaDatasetJsonNode___from'
  | 'childContentfulGachaDatasetJsonNode___rare'
  | 'childContentfulGachaDatasetJsonNode___tite'
  | 'childContentfulGachaDatasetJsonNode___genre'
  | 'childContentfulGachaDatasetJsonNode___artist'
  | 'childContentfulGachaDatasetJsonNode___subgenre'
  | 'childContentfulGachaDatasetJsonNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulGachaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGachaEdge>;
  nodes: Array<ContentfulGacha>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGachaFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  dataset?: Maybe<ContentfulGachaDatasetJsonNodeFilterListInput>;
  distri?: Maybe<ContentfulGachaDistriJsonNodeFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGachaSysFilterInput>;
  childrenContentfulGachaDistriJsonNode?: Maybe<ContentfulGachaDistriJsonNodeFilterListInput>;
  childContentfulGachaDistriJsonNode?: Maybe<ContentfulGachaDistriJsonNodeFilterInput>;
  childrenContentfulGachaDatasetJsonNode?: Maybe<ContentfulGachaDatasetJsonNodeFilterListInput>;
  childContentfulGachaDatasetJsonNode?: Maybe<ContentfulGachaDatasetJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulGachaSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGachaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulGachaDistriJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGachaDistriJsonNodeEdge>;
  nodes: Array<ContentfulGachaDistriJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulGachaDistriJsonNodeGroupConnection>;
};


export type ContentfulGachaDistriJsonNodeConnectionDistinctArgs = {
  field: ContentfulGachaDistriJsonNodeFieldsEnum;
};


export type ContentfulGachaDistriJsonNodeConnectionMaxArgs = {
  field: ContentfulGachaDistriJsonNodeFieldsEnum;
};


export type ContentfulGachaDistriJsonNodeConnectionMinArgs = {
  field: ContentfulGachaDistriJsonNodeFieldsEnum;
};


export type ContentfulGachaDistriJsonNodeConnectionSumArgs = {
  field: ContentfulGachaDistriJsonNodeFieldsEnum;
};


export type ContentfulGachaDistriJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGachaDistriJsonNodeFieldsEnum;
};

export type ContentfulGachaDistriJsonNodeEdge = {
  next?: Maybe<ContentfulGachaDistriJsonNode>;
  node: ContentfulGachaDistriJsonNode;
  previous?: Maybe<ContentfulGachaDistriJsonNode>;
};

export type ContentfulGachaDistriJsonNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'rare'
  | 'percent'
  | 'name'
  | 'sys___type';

export type ContentfulGachaDistriJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGachaDistriJsonNodeEdge>;
  nodes: Array<ContentfulGachaDistriJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGachaDistriJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGachaDistriJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulGachaDatasetJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGachaDatasetJsonNodeEdge>;
  nodes: Array<ContentfulGachaDatasetJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulGachaDatasetJsonNodeGroupConnection>;
};


export type ContentfulGachaDatasetJsonNodeConnectionDistinctArgs = {
  field: ContentfulGachaDatasetJsonNodeFieldsEnum;
};


export type ContentfulGachaDatasetJsonNodeConnectionMaxArgs = {
  field: ContentfulGachaDatasetJsonNodeFieldsEnum;
};


export type ContentfulGachaDatasetJsonNodeConnectionMinArgs = {
  field: ContentfulGachaDatasetJsonNodeFieldsEnum;
};


export type ContentfulGachaDatasetJsonNodeConnectionSumArgs = {
  field: ContentfulGachaDatasetJsonNodeFieldsEnum;
};


export type ContentfulGachaDatasetJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGachaDatasetJsonNodeFieldsEnum;
};

export type ContentfulGachaDatasetJsonNodeEdge = {
  next?: Maybe<ContentfulGachaDatasetJsonNode>;
  node: ContentfulGachaDatasetJsonNode;
  previous?: Maybe<ContentfulGachaDatasetJsonNode>;
};

export type ContentfulGachaDatasetJsonNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'from'
  | 'rare'
  | 'tite'
  | 'genre'
  | 'artist'
  | 'subgenre'
  | 'sys___type';

export type ContentfulGachaDatasetJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGachaDatasetJsonNodeEdge>;
  nodes: Array<ContentfulGachaDatasetJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGachaDatasetJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGachaDatasetJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWorkDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWorkDescriptionTextNodeEdge>;
  nodes: Array<ContentfulWorkDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulWorkDescriptionTextNodeGroupConnection>;
};


export type ContentfulWorkDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulWorkDescriptionTextNodeFieldsEnum;
};


export type ContentfulWorkDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulWorkDescriptionTextNodeFieldsEnum;
};


export type ContentfulWorkDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulWorkDescriptionTextNodeFieldsEnum;
};


export type ContentfulWorkDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulWorkDescriptionTextNodeFieldsEnum;
};


export type ContentfulWorkDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWorkDescriptionTextNodeFieldsEnum;
};

export type ContentfulWorkDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulWorkDescriptionTextNode>;
  node: ContentfulWorkDescriptionTextNode;
  previous?: Maybe<ContentfulWorkDescriptionTextNode>;
};

export type ContentfulWorkDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description'
  | 'sys___type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___vssue'
  | 'childrenMarkdownRemark___frontmatter___draft'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___content'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___description'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___owner'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___type'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___path'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___path'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___parent___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___parent___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___content'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___contentDigest'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___description'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___ignoreType'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___mediaType'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___owner'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___type'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___vssue'
  | 'childMarkdownRemark___frontmatter___draft'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___childrenGrvscCodeBlock'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___parent___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___parent___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___content'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___description'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___owner'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___type'
  | 'childMarkdownRemark___childGrvscCodeBlock___index'
  | 'childMarkdownRemark___childGrvscCodeBlock___html'
  | 'childMarkdownRemark___childGrvscCodeBlock___text'
  | 'childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childMarkdownRemark___childGrvscCodeBlock___language'
  | 'childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___path'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___path'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff'
  | 'childMarkdownRemark___childGrvscCodeBlock___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___parent___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___parent___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___children___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___children___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___content'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___contentDigest'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___description'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___ignoreType'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___mediaType'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___owner'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___type'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulWorkDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWorkDescriptionTextNodeEdge>;
  nodes: Array<ContentfulWorkDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWorkDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWorkDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSegmentContentTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSegmentContentTextNodeEdge>;
  nodes: Array<ContentfulSegmentContentTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulSegmentContentTextNodeGroupConnection>;
};


export type ContentfulSegmentContentTextNodeConnectionDistinctArgs = {
  field: ContentfulSegmentContentTextNodeFieldsEnum;
};


export type ContentfulSegmentContentTextNodeConnectionMaxArgs = {
  field: ContentfulSegmentContentTextNodeFieldsEnum;
};


export type ContentfulSegmentContentTextNodeConnectionMinArgs = {
  field: ContentfulSegmentContentTextNodeFieldsEnum;
};


export type ContentfulSegmentContentTextNodeConnectionSumArgs = {
  field: ContentfulSegmentContentTextNodeFieldsEnum;
};


export type ContentfulSegmentContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSegmentContentTextNodeFieldsEnum;
};

export type ContentfulSegmentContentTextNodeEdge = {
  next?: Maybe<ContentfulSegmentContentTextNode>;
  node: ContentfulSegmentContentTextNode;
  previous?: Maybe<ContentfulSegmentContentTextNode>;
};

export type ContentfulSegmentContentTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'sys___type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___vssue'
  | 'childrenMarkdownRemark___frontmatter___draft'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___parent___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___id'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___children___children'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___content'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___description'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___owner'
  | 'childrenMarkdownRemark___childrenGrvscCodeBlock___internal___type'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___index'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___html'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___text'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___language'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___path'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___path'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___parent___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___parent___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children___id'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___children___children'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___content'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___contentDigest'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___description'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___ignoreType'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___mediaType'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___owner'
  | 'childrenMarkdownRemark___childGrvscCodeBlock___internal___type'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___vssue'
  | 'childMarkdownRemark___frontmatter___draft'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___childrenGrvscCodeBlock'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___index'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___html'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___text'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___preClassName'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___codeClassName'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___language'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___meta'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___path'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___identifier'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___defaultTheme___conditions'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___path'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___identifier'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___additionalThemes___conditions'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___tokens'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___text'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___html'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___attrs'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___className'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___data'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___tokenizedLines___diff'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___parent___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___parent___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children___id'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___children___children'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___content'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___contentDigest'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___description'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___fieldOwners'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___ignoreType'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___mediaType'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___owner'
  | 'childMarkdownRemark___childrenGrvscCodeBlock___internal___type'
  | 'childMarkdownRemark___childGrvscCodeBlock___index'
  | 'childMarkdownRemark___childGrvscCodeBlock___html'
  | 'childMarkdownRemark___childGrvscCodeBlock___text'
  | 'childMarkdownRemark___childGrvscCodeBlock___preClassName'
  | 'childMarkdownRemark___childGrvscCodeBlock___codeClassName'
  | 'childMarkdownRemark___childGrvscCodeBlock___language'
  | 'childMarkdownRemark___childGrvscCodeBlock___meta'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___path'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier'
  | 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___path'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier'
  | 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___gutterCells'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___lineNumber'
  | 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___diff'
  | 'childMarkdownRemark___childGrvscCodeBlock___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___parent___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___parent___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___children___id'
  | 'childMarkdownRemark___childGrvscCodeBlock___children___children'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___content'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___contentDigest'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___description'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___ignoreType'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___mediaType'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___owner'
  | 'childMarkdownRemark___childGrvscCodeBlock___internal___type'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulSegmentContentTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSegmentContentTextNodeEdge>;
  nodes: Array<ContentfulSegmentContentTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSegmentContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSegmentContentTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___theme'
  | 'pluginOptions___plugins___nodeAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___fileName'
  | 'pluginOptions___codegenDelay'
  | 'pluginOptions___codegen'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___forceFullSync'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___head'
  | 'pluginOptions___anonymize'
  | 'pluginOptions___respectDNT'
  | 'pluginOptions___pageTransitionDelay'
  | 'pluginOptions___ignore'
  | 'pluginOptions___prefixes'
  | 'pluginOptions___theme'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
