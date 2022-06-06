import { useInputGroup } from "@proficient/components";

export const useProfile = ({
    customer
}) => {
    const company = useInputGroup({
        initialValue: "E. Hofmann Plastics",
        label: "Company",
        name: "company",
        placeholder: "Company..."
    });

    const contactOneName = useInputGroup({
        initialValue: "John Doe",
        label: "Name",
        name: "contact-one-name",
        placeholder: "Name..."
    });

    const contactOneRole = useInputGroup({
        initialValue: "CEO",
        label: "Role",
        name: "contact-one-role",
        placeholder: "Role..."
    }); 

    const contactOneEmail = useInputGroup({
        initialValue: "johndoe@example.com",
        label: "Email",
        name: "contact-one-email",
        placeholder: "Email...",
        type: "email"
    });

    const contactOnePhone = useInputGroup({
        label: "Phone",
        placeholder: "Phone...",
        type: "tel"
    });

    const contactTwoName = useInputGroup({
        initialValue: "Jane Doe",
        label: "Name",
        name: "contact-two-name",
        placeholder: "Name..."
    });

    const contactTwoRole = useInputGroup({
        initialValue: "CFO",
        label: "Role",
        name: "contact-one-role",
        placeholder: "Role..."
    }); 

    const contactTwoEmail = useInputGroup({
        initialValue: "janedoe@example.com",
        label: "Email",
        name: "contact-two-email",
        placeholder: "Email...",
        type: "email"
    });

    const contactTwoPhone = useInputGroup({
        label: "Phone",
        name: "contact-two-phone",
        placeholder: "Phone...",
        type: "tel"
    });

    const contactThreeName = useInputGroup({
        initialValue: "Joe Doe",
        label: "Name",
        name: "contact-three",
        placeholder: "Email...",
        type: "email"
    });

    const contactThreeRole = useInputGroup({
        initialValue: "CMO",
        label: "Role",
        name: "contact-one-role",
        placeholder: "Role..."
    }); 

    const contactThreeEmail = useInputGroup({
        initialValue: "joedoe@example.com",
        label: "Email",
        name: "contact-three-email",
        placeholder: "Email...",
        type: "email"
    });

    const contactThreePhone = useInputGroup({
        label: "Phone",
        name: "contact-three-phone",
        placeholder: "Phone...",
        type: "tel"
    });

    const contacts = [
        // 
    ];

    const fields = {
        company,
        contactOne: {
            name: contactOneName,
            email: contactOneEmail,
            phone: contactOnePhone,
            role: contactOneRole,
        },
        contactTwo: {
            name: contactTwoName,
            email: contactTwoEmail,
            phone: contactTwoPhone,
            role: contactTwoRole
        },
        contactThree: {
            name: contactThreeName,
            phone: contactThreePhone,
            email: contactThreeEmail,
            role: contactThreeRole
        }
    };

    return {
        fields
    };  
};