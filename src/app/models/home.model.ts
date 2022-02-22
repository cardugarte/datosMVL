export interface CovidDataResume {
  result:           Result;
  status:           number;
  description:      string;
  parameters:       any[];
  tags:             string[];
  lastRevisionId: number;
  timestamp:        null;
  createdAt:       Date;
  title:            string;
  modifiedAt:      Date;
  categoryId:      number;
  methods:          null;
  sources:          any[];
  totalRevisions:  number;
  frequency:        string;
  link:             null;
  user:             string;
  statusStr:       null;
  guid:             string;
  categoryName:    string;
  endpoint:         string;
}

export interface Result {
  fLength:    number;
  fType:      string;
  fTimestamp: number;
  fArray:     FArray[];
  fRows:      number;
  fCols:      number;
}

export interface FArray {
  fStr:  string;
  fType: string;
}
