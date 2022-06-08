import { Filter } from "mongodb";

import { handleRepoError } from "@proficient/adapters";
import { Special } from "@proficient/types";

import { SpecialRepo, SpecialRepoDependencies } from "./types";
import { NotFoundError } from "@proficient/exceptions";


export const makeSpecialsRepo = ({
    dao,
    projection,
    sort
}: SpecialRepoDependencies): SpecialRepo => {
    /**
     * @function create
     * @param {Special} special 
     * @returns {Promise<Special>}
     */
    const create = async (special: Special): Promise<Special> => {
        try {
            await dao.insertOne(special);

            return special;
        } catch(e) {
            return handleRepoError(e);
        }
    };

    /**
     * @function getById
     * @param {string} id 
     * @returns {Promise<Special>}
     */
    const getById = async (id: string): Promise<Special> => {
        try {
			const special = await dao.findById(id);

			if (!special)
				throw new NotFoundError({ message: "Special was not found" });

			return special;
		} catch (e) {
			return handleRepoError(e);
		}
    }
   
    /**
     * @function findBy
     * @param {Filter<Special>} filter query filter
     * @returns {Promise<Special[] | null>}
     */
    const findBy = async (filter: Filter<Special>): Promise<Special[] | null> => {
        try {
            const specials = await dao.findAll(filter, { projection, sort });

            if(!specials.length)
                return null;

            return specials;
        } catch(e) {
            return handleRepoError(e);
        }
    };

    /**
     * @function update
     * @param {} special 
     * @returns {}
     */
    const update = async (special: Special): Promise<Special> => {
        try {
            await dao.updateOne(special);

            return special;
        } catch(e) {
            return handleRepoError(e);
        }
    };
    
    const remove = async (id:string) => {
        try {
            await dao.deleteOne(id);

            return;
        } catch(e) {    
            return handleRepoError(e);
        }
    };

    return {
        create,
        getById,
        findBy,
        update,
        remove
    };
};

