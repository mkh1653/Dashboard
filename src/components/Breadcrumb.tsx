import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link, { LinkProps } from "@mui/material/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function MyLink(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box mb={3}>
      <Breadcrumbs aria-label='breadcrumb' maxItems={3} sx={{ opacity: 0.6 }}>
        <MyLink underline='hover' color='inherit' to='/'>
          Dashboard
        </MyLink>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography
              variant='body2'
              sx={{ textTransform: "capitalize" }}
              color='text.primary'
              key={to}>
              {value}
            </Typography>
          ) : (
            <MyLink
              variant='body2'
              sx={{ textTransform: "capitalize", verticalAlign: "text-bottom" }}
              underline='hover'
              color='inherit'
              to={to}
              key={to}>
              {value}
            </MyLink>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
