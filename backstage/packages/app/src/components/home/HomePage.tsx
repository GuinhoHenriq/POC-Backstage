// packages/app/src/components/home/HomePage.tsx
import { Grid, Typography, CardContent, Button } from '@material-ui/core';
import { InfoCard, Header, Page, Content } from '@backstage/core-components';

export const HomePage = () => {
  return (
    <Page themeId="home"> {/* Use um themeId para estilização específica se desejar */}
      <Header title="Bem-vindo ao Nosso Backstage!" subtitle="Seu portal de desenvolvimento" />
      <Content>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <InfoCard title="Nossos Serviços">
              <CardContent>
                <Typography variant="body1">
                  Explore os diversos serviços e ferramentas disponíveis para facilitar o seu trabalho.
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                  Ver Catálogo
                </Button>
              </CardContent>
            </InfoCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard title="Últimas Notícias">
              <CardContent>
                <Typography variant="body1">
                  Mantenha-se atualizado com as últimas novidades e anúncios importantes.
                </Typography>
                <Button variant="outlined" color="secondary" style={{ marginTop: '16px' }}>
                  Ler Notícias
                </Button>
              </CardContent>
            </InfoCard>
          </Grid>
          <Grid item xs={12}>
            <InfoCard title="Recursos Rápidos">
              <CardContent>
                <Typography variant="body1">
                  Acesse rapidamente documentações, links úteis e ferramentas comuns.
                </Typography>
                {/* Você pode adicionar mais botões ou links aqui */}
              </CardContent>
            </InfoCard>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};