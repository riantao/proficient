import { useState } from "react";
import { useRecoilState } from "recoil";

import { modalState } from "@proficient/components";
import { useProjects, useSpecials as useSpecialsData } from "@proficient/data-access";
import { Special } from "@proficient/types";

import { filterSpecialByProject, filterSpecialString, projectToOption } from "../helpers";
import { useInputFilter, useMultiSelectFilter } from ".";
import { makeRenderSpecial } from "../renderers";

/**
 * @function useSpecials
 * @param {SpecialsProps} deps
 * @returns {}
 */
export const useSpecials = () => {
    const [selectedSpecial, setSelectedSpecial] = useState<Special | null>(null);
    const [, setIsOpen] = useRecoilState(modalState);

    const { data: specials  } = useSpecialsData();
    const { data: projects } = useProjects();

    const handleNew = () => {
        setSelectedSpecial(null);
        setIsOpen(true);
    };

    const makeHandleOpen = (special: Special | null) => {
        const handleOpen = () => {
            setSelectedSpecial(special);
            setIsOpen(true);
        };

        return handleOpen;
    };

    const renderSpecial = makeRenderSpecial(makeHandleOpen);

    const idFilter = useInputFilter({ 
        placeholder: "Filter by special ID..." 
    });

    const titleFilter = useInputFilter({
        placeholder: "Filter by short description..."
    });

    const descriptionFilter = useInputFilter({
        placeholder: "Filter by long description..."
    });

    const projectFilter = useMultiSelectFilter({
        options: projects.map(projectToOption),
        placeholder: "Filter by reference projects..."
    });

    const filter = {
        id: idFilter,
        title: titleFilter,
        description: descriptionFilter,
        project: projectFilter
    };

    const byId = filterSpecialString("id", idFilter.value);
    const byTitle = filterSpecialString("title", titleFilter.value);
    const byDescription = filterSpecialString("description", descriptionFilter.value);
    const byProject = filterSpecialByProject(projectFilter.value); 

    const filteredSpecials = specials
        .filter(byId)
        .filter(byTitle)
        .filter(byDescription)
        .filter(byProject);

    return {
        selectedSpecial,
        filter,
        filteredSpecials,
        renderSpecial,
        onClick: handleNew
    };
};