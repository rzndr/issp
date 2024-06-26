import { createId } from '@paralleldrive/cuid2';
import {
  Role,
  User,
  Agency,
  Category,
  ISSP,
  Action_History,
  ISSP_Action,
  User_Role,
} from '@prisma/client';

export const DEFAULT = {
  PW: 'ChangeM3!',
  _PW: '8%GVnnFit6viNS5O',
};

export const CATEGORIES: {
  [key: string]: Pick<Category, 'id' | 'name' | 'code'>;
} = {
  EDS: {
    id: createId(),
    code: 'EDS',
    name: 'Economic Development Sector',
  },
  HDS: {
    id: createId(),
    code: 'HDS',
    name: 'Human Development Sector',
  },
  GGS: {
    id: createId(),
    code: 'GGS',
    name: 'Good Governance Sector',
  },
  SPJ: {
    id: createId(),
    code: 'SPJ',
    name: 'Security, Peace and Justice Sector',
  },
  FEC: {
    id: createId(),
    code: 'FEC',
    name: 'Food Security, Ecological Protection and Climate Change',
  },
  EDC: {
    id: createId(),
    code: 'EDC',
    name: 'Education',
  },
};

export const AGENCIES: {
  [key: string]: Pick<Agency, 'id' | 'email' | 'name' | 'code'>;
} = {
  DICT: {
    id: createId(),
    email: 'dict@local',
    code: 'DICT',
    name: 'Department of Information and Communications Technology',
  },
  DILG: {
    id: createId(),
    email: 'dilg@local',
    code: 'DILG',
    name: 'Department of the Interior and Local Government',
  },
  DAR: {
    id: createId(),
    email: 'dar@local',
    code: 'DAR',
    name: 'Department of Agrarian Reform',
  },
  DA: {
    id: createId(),
    email: 'da@local',
    code: 'DA',
    name: 'Department of Agriculture',
  },
  DBM: {
    id: createId(),
    email: 'dbm@local',
    code: 'DBM',
    name: 'Department of Budget and Management',
  },
  DE: {
    id: createId(),
    email: 'de@local',
    code: 'DE',
    name: 'Department of Education',
  },
};

export const ROLES: {
  [key: string]: Pick<User_Role, 'id' | 'name'>;
} = {
  SUPER_ADMIN: {
    id: createId(),
    name: Role.SUPER_ADMIN,
  },
  ADMIN: {
    id: createId(),
    name: Role.ADMIN,
  },
  ASSIGNER: {
    id: createId(),
    name: Role.ASSIGNER,
  },
  PLANNER: {
    id: createId(),
    name: Role.PLANNER,
  },
  EVALUATOR: {
    id: createId(),
    name: Role.EVALUATOR,
  },
  VALIDATOR: {
    id: createId(),
    name: Role.VALIDATOR,
  },
  APPROVER: {
    id: createId(),
    name: Role.APPROVER,
  },
};

// export const PERMISSIONS: {
//   [key: string]: Pick<Permission, 'id' | 'roleId'>;
// } = {};

export const USERS: {
  [key: string]: Pick<User, 'id' | 'email' | 'password' | 'role'>;
} = {
  SUPER_ADMIN: {
    id: createId(),
    email: 'super.admin@local',
    password: DEFAULT._PW,
    role: [Role.SUPER_ADMIN],
  },
  ADMIN: {
    id: createId(),
    email: 'admin@local',
    password: DEFAULT.PW,
    role: [Role.ADMIN],
  },
  VIEWER: {
    id: createId(),
    email: 'viewer@local',
    password: DEFAULT.PW,
    role: [Role.VIEWER],
  },
  EVALUATOR: {
    id: createId(),
    email: 'evaluator@local',
    password: DEFAULT.PW,
    role: [Role.EVALUATOR],
  },
  PLANNER: {
    id: createId(),
    email: 'planner@local',
    password: DEFAULT.PW,
    role: [Role.PLANNER],
  },
  ENDORSER: {
    id: createId(),
    email: 'endorser@local',
    password: DEFAULT.PW,
    role: [Role.ENDORSER],
  },
  APPROVER: {
    id: createId(),
    email: 'approver@local',
    password: DEFAULT.PW,
    role: [Role.APPROVER],
  },
};

export const ISSPS: {
  [key: string]: Pick<ISSP, 'id' | 'title' | 'startYear' | 'endYear'>;
} = {
  DICT_ISSP: {
    id: createId(),
    title: 'DICT Information System Strategic Plan 2018-2020 ',
    startYear: 2018,
    endYear: 2020,
  },
  DILG_ISSP: {
    id: createId(),
    title: 'DILG Information System Strategic Plan 2018-2020 ',
    startYear: 2020,
    endYear: 2023,
  },
  DAR_ISSP: {
    id: createId(),
    title: 'DAR Information System Strategic Plan 2018-2020 ',
    startYear: 2017,
    endYear: 2019,
  },
  DE_ISSP: {
    id: createId(),
    title: 'DE Information System Strategic Plan 2018-2020 ',
    startYear: 2019,
    endYear: 2021,
  },
  DA_ISSP: {
    id: createId(),
    title: 'DA Information System Strategic Plan 2018-2020 ',
    startYear: 2005,
    endYear: 2007,
  },
};

export const ACTION_HISTORY: {
  [key: string]: Pick<
    Action_History,
    | 'id'
    | 'userId'
    | 'parentModule'
    | 'childModule'
    | 'changes'
    | 'action'
    | 'isspVersion'
  >;
} = {
  DICT_ISSP_1: {
    id: createId(),
    userId: USERS.PLANNER.id,
    action: ISSP_Action.CREATE,
    parentModule: 'PART I. ORGANIZATIONAL PROFILE',
    childModule: 'A. DEPARTMENT/AGENCY VISION / MISSION STATEMENT',
    changes: ['Updated agency vision and mission statement'],
    isspVersion: 1,
  },
  DICT_ISSP_2: {
    id: createId(),
    userId: USERS.ADMIN.id,
    action: ISSP_Action.INSERT,
    parentModule: 'PART I. ORGANIZATIONAL PROFILE',
    childModule: 'B. DEPARTMENT/AGENCY PROFILE',
    changes: ['Inserted agency vision and mission statement'],
    isspVersion: 2,
  },
  DICT_ISSP_3: {
    id: createId(),
    userId: USERS.ENDORSER.id,
    action: ISSP_Action.ENDORSED,
    parentModule: 'PART III. DETAILED DESCRIPTION OF ICT PROJECTS',
    childModule: 'A. INTERNAL ICT PROJECTS',
    changes: ['Endorsed internal ICT projects'],
    isspVersion: 3,
  },
  DICT_ISSP_4: {
    id: createId(),
    userId: USERS.EVALUATOR.id,
    action: ISSP_Action.AMEND,
    parentModule: 'PART V. DEVELOPMENT AND INVESTMENT PROGRAM',
    childModule: 'A. ICT PROJECTS IMPLEMENTATION SCHEDULE',
    changes: ['Amend project schedule'],
    isspVersion: 4,
  },
  DICT_ISSP_5: {
    id: createId(),
    userId: USERS.APPROVER.id,
    action: ISSP_Action.ASSIGN,
    parentModule: 'PART IV. RESOURCE REQUIREMENTS',
    childModule: 'A. DEPLOYMENT OF ICT EQUIPMENT AND SERVICES',
    changes: ['Assigned ICT equipments and services'],
    isspVersion: 5,
  },
};
