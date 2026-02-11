const produtoController = {
    
    uploadController: async (req, res) => {
        try {
            if(!req.files){
                return res.status(400).json({message: 'Arquivo não enviado'});
            }
            res.status(200).json({
                message: 'Upload realizado com Sucesso',
                file:{
                    filename:req.files.filename,
                    size: req.files.size,
                    mimeType: req.files.mimeType
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'Ocorreu um erro no servidor', errorMessage: error.message})
        }
    }
}
export default produtoController;