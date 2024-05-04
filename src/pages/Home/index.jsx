import React, { useRef } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from "../../style/GlobalStyle";
import { InternalLeftForm, InternalRightForm, Form, PrincipalForm } from './style';
import { ExternalCardImages, FirstExternalCard, LeftExternalCard, RightExternalCard, CardImagens, Card  } from './style';
import camisa_image from '/Black Blank T-shirt on transparent background-Photoroom.png-Photoroom fundo removido.png';
import icon_lixo from '/icon_lixo.svg';

const submitSchema = z.object({
  nome_data: z.string().min(1, 'O nome é obrigatório'),
  sku_data: z.string().min(1, 'O SKU é obrigatório'),
  tipo_data: z.string().min(1, 'O tipo é obrigatório'),
  marca_data: z.string().min(1, 'A marca é obrigatória'),
  fornecedor_data: z.string().min(1, 'O fornecedor é obrigatório'),
  categoria_data: z.string().min(1, 'A categoria é obrigatória'),
  descricao_data: z.string().min(1, 'A descrição é obrigatória'),
});

export const Home = () => {
 const fileInputRef = useRef(null);
 const [ file, setFile ] = React.useState(null);
 const [ imageURL, setImageURL ] = React.useState(null);
 const [ open, setOpen ] = React.useState(false);
 
 const { register, handleSubmit, formState: { errors } 
 } = useForm({
  resolver: zodResolver(submitSchema),
 })

 const [ list, setList ] = React.useState([{
  nome: 'Camisa',
  sku: 'abc',
  tipo: 'preta',
  marca: 'adidas',
  fornecedor: 'brasil',
  categoria: 'A',
  descricao: 'bom dia',
  imagem: `${camisa_image}`
 }])
 
 function mooveObject(position, estado) {
  setOpen(estado)
  const updateList = [...list];
  const movedObject = updateList[position];
  updateList.splice(position, 1);
  updateList.unshift(movedObject);
  setImageURL(mooveObject.imagem)
  setList(updateList);
}

 function handleOpenModal(estado) {
  setOpen(estado)
 }

 const handleDeleteModal = (estado, posicao) => {
  setOpen(estado)
  const updateItens = [...list]
  updateItens.splice(posicao,1)
  setList(updateItens)
 }

 const handleDragOver = (event) => {
  event.preventDefault();
 };

 function onSubmit (data) {
  if (Object.keys(errors).length === 0) { 
   const file = fileInputRef.current.files[0];
   const abcimageURL = URL.createObjectURL(file);
   setImageURL(abcimageURL);

   const formData = {
    nome: data.nome_data,
    sku: data.sku_data,
    tipo: data.tipo_data,
    marca: data.marca_data,
    fornecedor: data.fornecedor_data,
    categoria: data.categoria_data,
    descricao: data.descricao_data,
    imagem: abcimageURL
   };

   setList([...list, formData])
  }
 };

 return (
  <>
   <Container>
    <h1 style={{ marginTop: '100px', fontFamily: 'Poppins', fontSize: '21px'}}>Informações gerais</h1>
    <PrincipalForm onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
    <Form>
     <InternalLeftForm>
      <label>Nome</label>
      <input type="text" placeholder="Nome do produto" {...register('nome_data')}/>
      {errors.nome_data && <span>{errors.nome_data.message}</span>}
      <label>Código (SKU)</label>
      <input type="text" placeholder="Código (SKU) do produto" {...register('sku_data')}/>
      {errors.sku_data && <span>{errors.sku_data.message}</span>}
      <label>Fornecedor</label>
      <input type="text" placeholder="Nome do fornecedor" {...register('fornecedor_data')}/>
      {errors.fornecedor_data && <span>{errors.fornecedor_data.message}</span>}
     </InternalLeftForm>
     <InternalRightForm>
      <label>Tipo</label>
      <input type="text" placeholder="Tipo" {...register('tipo_data')}/>
      {errors.tipo_data && <span>{errors.tipo_data.message}</span>}
      <label>Marca</label>
      <input type="text" placeholder="Nome da marca" {...register('marca_data')}/>
      {errors.marca_data && <span>{errors.marca_data.message}</span>}
      <label>Categoria</label>
      <input type="text" placeholder="Nome da categoria" {...register('categoria_data')}/>
      {errors.categoria_data && <span>{errors.categoria_data.message}</span>}
     </InternalRightForm>
     </Form>
     <label className='descricao'>Descrição
      <textarea name="textarea" rows="10" cols="265.2" {...register('descricao_data')} placeholder='Insira uma descrição do produto'></textarea>
      {errors.descricao_data && <span>{errors.descricao_data.message
}</span>}
     </label>
     <div className='submit_content'>
       <input type="submit" value={`Enviar`}/>
      </div>
     <label htmlFor="input_file" style={{ cursor: 'pointer' }}>
     <input 
  type="file"
  id="input_file"
  name="abcx"
  accept="image/*"
  onDragOver={handleDragOver}
  style={{
    width: '100%',
    height: '300px',
    border: '2px dashed #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    paddingTop: '50px',
    boxSizing: 'border-box',
    cursor: 'pointer',
  }}
  ref={fileInputRef}
/>
      <div className='submit_second_content'>
       <div>
        +
       </div>
       <div>
       Selecione ou arraste aqui as imagens dos produtos
       <p>Máximo de 15 imagens. Tamanho máximo 4MB. <br />Envie imagens no formato JPG ou PNG.</p>
       </div>
      </div>
      {errors.imagem && <span>{errors.imagem.message}</span>}
     </label>  
     </PrincipalForm>

    <ExternalCardImages>
     <FirstExternalCard>
      <LeftExternalCard>
       <h2>Imagens do produto</h2>
       <p>Máximo de 15 imagens. Tamanho máximo de 4MB.<br />Envie imagens no formato JPG ou PNG.</p>   
      </LeftExternalCard>
     </FirstExternalCard>
    <CardImagens>
     {list.map((item, index) => (
     <Card key={index}>
      <div className='delete__card'>
       <Button variant="outlined" color="none" onClick={() => handleOpenModal(true)}>
        <img src={icon_lixo} className='delete_icon' />
       </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset',
            },
          })}
        >
          <Typography id="nested-modal-title" level="h2">
           Tem certeza?
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
           Esse ato não podera ser revertido
          </Typography>
          <Box
            sx={{
             mt: 1,
             display: 'flex',
             gap: 1,
             flexDirection: { xs: 'column', sm: 'row-reverse' },
            }}
          >
            <Button variant="solid" color="primary" onClick={() => mooveObject(index, false)}>
              Escolher como profissional
            </Button>
            <Button variant="solid" color="primary" onClick={() => handleDeleteModal(false, index)}>
              Continue
            </Button>
            <Button
             variant="outlined"
             color="neutral"
             onClick={() => setOpen(false)}
            >
             Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
      </div>
      <img src={item.imagem} className='principal_image'/>
     </Card>))}
    </CardImagens>
    </ExternalCardImages>
   </Container>  
  </>
  )
}