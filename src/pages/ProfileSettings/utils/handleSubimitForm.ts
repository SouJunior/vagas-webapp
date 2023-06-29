interface SubmitProps {
    data: {
        location: any;
        type: any;
        size: any;
        site: any;
        description: any;
        instagram: string;
        linkedin: string;
        twitter: string;
    };
    selectedImage: any;
    api: any;
    auth: any;
}

export const handleSubmitForm = async ({data, selectedImage, api, auth }: SubmitProps) => {
    console.log(data)
    const formData = new FormData();
    formData.append('companyType', data.type);
    formData.append('companySize', data.size);
    formData.append('location', data.location);
    formData.append('companySite', data.site);
    formData.append('description', data.description);
    formData.append('otherSite[instagram]', data.instagram);
    formData.append('otherSite[linkedin]', data.linkedin);
    formData.append('otherSite[twitter]', data.twitter);

    if (selectedImage) {
        formData.append('file', selectedImage);
    }

    formData.append('profileKey', auth.user.profileKey ?? 'lkjhgfdsa');

    try {
        const res = await api.updateCompanyProfile(formData);
        return res;
        //TODO mensagem de envio com sucesso / pop-up "atualizações salvas"
    } catch (error) {
        //TODO ver mensagem de erro para o usuário
    }
};
