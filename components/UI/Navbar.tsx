import NextLink from "next/link";
import { AppBar, IconButton, Toolbar, Typography, Box, Link, Button, Badge } from "@mui/material";
import { SearchOffOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <NextLink href="/" passHref>
                    <Typography component="a" variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                        Ecommerce | Shop
                    </Typography>
                </NextLink>
                <Box sx={{ flex: 1 }} />
                <Box sx={{ display:{xs: "none", sm:"block"}}}>
                    <NextLink href="/categoria/mouse" passHref>
                        <Link>
                            <Button color="inherit">Mouse</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/categoria/streaming" passHref>
                        <Link>
                            <Button color="inherit">Streaming</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/categoria/keyboard" passHref>
                        <Link>
                            <Button color="inherit">Keyboard</Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box sx={{ flex: 1 }} />
                <IconButton color="inherit">
                    <SearchOffOutlined />
                </IconButton>
                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton color="inherit">
                            <Badge badgeContent={5} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>
                <Button>
                    Menu
                </Button>
            </Toolbar>
        </AppBar>
    );
};
