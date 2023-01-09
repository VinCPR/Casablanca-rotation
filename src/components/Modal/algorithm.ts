import { Service, Rotation, Department, Hospital, Tuple } from "./types";

/** Given an array, generate all possible permutation of the array
 * For example: permute([1, 2]) = [[1, 2], [2, 1]]
 */
function permute<T>(permutation: T[]) {
  let length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

/**
 * Generate all possible services permutation satisfying the services in the same departments should be joined together
 */

function generateRotationServices(
  perm: Tuple[][],
  current: Tuple[][],
  id: number
) {
  if (id === perm.length) {
    return [current];
  }
  const permServices = permute(perm[id]);
  let res: Tuple[][][] = [];
  const ans = permServices.map((p) => {
    const rotationServices = generateRotationServices(
      perm,
      [...current, p],
      id + 1
    );
    res = [...res, ...rotationServices];
  });
  return res;
}

/**
 * Calculate the number of weeks that have the
 * same service between two services permutation
 */
function diffRot(perm1: Tuple[][], perm2: Tuple[][]) {
  let id1i = 0,
    id2i = 0,
    id1j = 0,
    id2j = 0,
    totali = 0,
    totalj = 0,
    ans = 0;
  for (let i = 1; i <= 10; i++) {
    if (
      id2i + 1 < perm1[id1i].length &&
      i > totali + perm1[id1i][id2i].numOfWeeks
    ) {
      totali += perm1[id1i][id2i].numOfWeeks;
      id2i++;
    }
    if (id1i + 1 < perm1.length && i > totali + perm1[id1i][id2i].numOfWeeks) {
      totali += perm1[id1i][id2i].numOfWeeks;
      id2i = 0;
      id1i++;
    }
    if (
      id2j + 1 < perm2[id1j].length &&
      i > totalj + perm2[id1j][id2j].numOfWeeks
    ) {
      totalj += perm2[id1j][id2j].numOfWeeks;
      id2j++;
    }
    if (id1j + 1 < perm2.length && i > totalj + perm2[id1j][id2j].numOfWeeks) {
      totalj += perm2[id1j][id2j].numOfWeeks;
      id2j = 0;
      id1j++;
    }
    if (
      perm1[id1i][id2i].service === perm2[id1j][id2j].service &&
      perm1[id1i][id2i].hospital === perm2[id1j][id2j].hospital &&
      perm1[id1i][id2i].department === perm2[id1j][id2j].department
    ) {
      ans++;
    }
  }
  return ans;
}

/**
 * Given a list of services permutation, calculate the `diffRot` between every pair of services permutations
 * In the problem, we will try to minimize this calculation
 */
function calculateLoss(list: number[], totalPerms: Tuple[][][]) {
  let ans = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      ans += diffRot(totalPerms[list[j]], totalPerms[list[i]]);
    }
  }
  return ans;
}

/**
 * Generate all possible `x` valid services permutation, and calculate the `loss` of that instance and took the one with minimum loss
 */
function backtrack(x: number, list: number[], totalPerms: Tuple[][][]) {
  if (list.length === x) {
    return {
      loss: calculateLoss(list, totalPerms),
      res: list,
    };
  }
  let bestLoss = 100000000000;
  let ans: number[] = [];
  for (let i = 0; i < totalPerms.length; i++) {
    const { loss, res } = backtrack(x, [...list, i], totalPerms);
    if (loss < bestLoss) {
      bestLoss = loss;
      ans = res;
    }
  }
  return {
    loss: bestLoss,
    res: ans,
  };
}

function generateRotationDesign(deptServices: Tuple[][], x: number) {
  const perms = permute(deptServices);
  let totalPerms: Tuple[][][] = [];
  for (let i = 0; i < perms.length; i++) {
    totalPerms = totalPerms.concat(generateRotationServices(perms[i], [], 0));
  }
  const results = backtrack(x, [], totalPerms);
  return results.res.map((index) => totalPerms[index]);
}

/**
 *
 * @param data the requirements input specified by the user
 * @param x the number of groups
 */

export function designRotation(data: Rotation, x: number) {
  let curTuple: Tuple[] = [],
    tuples: Tuple[][] = [],
    sum = 0,
    sum2 = 0,
    idDepartments = 0,
    idHospitals = 0;
  for (let i = 0; i < data.services.length; i++) {
    sum += data.services[i].numOfWeeks;

    sum2 += data.services[i].numOfWeeks;

    curTuple = [
      ...curTuple,
      {
        department: data.departments[idDepartments].name,
        hospital: data.hospitals[idHospitals].name,
        service: data.services[i].name,
        numOfWeeks: data.services[i].numOfWeeks,
      },
    ];

    if (sum === data.departments[idDepartments].numOfWeeks) {
      idDepartments++;
      tuples = [...tuples, curTuple];
      curTuple = [];
      sum = 0;
    }
    if (sum2 === data.hospitals[idHospitals].numOfWeeks) {
      idHospitals++;
      sum2 = 0;
    }
  }
  const results = generateRotationDesign(tuples, x);
  return results.map((result: Tuple[][]) => {
    const tuples = result.flat();
    const services: Service[] = tuples.map((tuple) => {
      return {
        name: tuple.service,
        numOfWeeks: tuple.numOfWeeks,
      };
    });
    const hospitals: Hospital[] = tuples.map((tuple) => {
      return {
        name: tuple.hospital,
        numOfWeeks: tuple.numOfWeeks,
      };
    });
    const departments: Department[] = tuples.map((tuple) => {
      return {
        name: tuple.department,
        numOfWeeks: tuple.numOfWeeks,
      };
    });
    return {
      departments,
      hospitals,
      services,
    };
  });
}
