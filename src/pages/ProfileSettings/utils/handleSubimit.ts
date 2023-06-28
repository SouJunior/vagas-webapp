interface SubmitProps {
    e: any;
    selectedImage: any;
    api: any;
    auth: any;
}

export const handleSubmit = async ({ e, selectedImage, api, auth }: SubmitProps) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('companyType', e.target.type.value);
    formData.append('companySize', e.target.size.value);
    formData.append('location', e.target.states.value);
    formData.append('companySite', e.target.site.value);
    formData.append('description', e.target.description.value);
    formData.append('otherSite[instagram]', e.target.instagram.value);
    formData.append('otherSite[linkedin]', e.target.linkedin.value);
    formData.append('otherSite[twitter]', e.target.twitter.value);

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
